import * as PatientModel from '../models/Patient.model'
import * as ResetPasswordTokenModel from '../models/ResetPasswordTokens.model'
import * as SupervisorModel from '../models/Supervisor.model'
import * as jwt from 'jsonwebtoken'
import { IPatientModel } from '../types/Patient.type'
import { USER_ROLES } from '../types/User.types'
import { MailObject } from '../types/sendingMail.types'
import { UnprocessableError } from '../types/general.types'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import mongoose from 'mongoose'
import { sendMail } from './SendingMail.services'

export const login = async (email: string, password: string, role: string) => {
  let user
  switch (role) {
    case USER_ROLES.PATIENT:
      user = await PatientModel.getPatientByEmail(email)
      break
    case USER_ROLES.SUPERVISOR:
      user = await SupervisorModel.getSupervisorByEmail(email)
      break
    default:
      break
  }

  if (!user) {
    throw new UnprocessableError(
      'Email not found in the database, can not login.'
    )
  }

  const validPass = bcrypt.compare(user.password, password)
  if (!validPass) {
    throw new UnprocessableError('Password is invalid')
  }

  const token = generateToken(user._id, email, password)
  const associatedUsers: any = []

  switch (role) {
    case USER_ROLES.PATIENT:
      await Promise.all(
        user.associated_users.map(async (user: mongoose.Types.ObjectId) => {
          const { name, address, profile_picture, _id } =
            await SupervisorModel.getSupervisorById(user)
          associatedUsers.push({ name, address, profile_picture, _id })
        })
      )
      break
    case USER_ROLES.SUPERVISOR:
      await Promise.all(
        user.associated_users.map(async (user: mongoose.Types.ObjectId) => {
          const { name, address, profile_picture, _id } =
            (await PatientModel.getPatient(user)) as IPatientModel
          associatedUsers.push({ name, address, profile_picture, _id })
        })
      )
      break
    default:
      break
  }

  return {
    ...user._doc,
    associatedUsers,
    token: token
  }
}

const generateToken = (id: string, email: string, password: string) => {
  // TODO: move my_secret to environment variable
  return jwt.sign(
    { data: { id: id, user_email: email, pass: password } },
    'My_SECRET'
  )
}

const decideUser = async (email: string, role: string) => {
  let user
  switch (role) {
    case USER_ROLES.PATIENT:
      user = await PatientModel.getPatientByEmail(email)
      if (!user) {
        throw new UnprocessableError('Email not found in the database, can not recover password.')
      }
      break
    case USER_ROLES.SUPERVISOR:
      user = await SupervisorModel.getSupervisorByEmail(email)
      if (!user) {
        throw new UnprocessableError('Email not found in the database, can not recover password.')
      }
      break
    default:
      throw new Error('This type of user is not supported')
  }

  return user
}

const decideUserUsingId = async (userId: string, role: string) => {
  let user
  const userMongoId = new mongoose.Types.ObjectId(userId)
  switch (role) {
    case USER_ROLES.PATIENT:
      user = await PatientModel.getPatient(userMongoId)
      if (!user) {
        throw new UnprocessableError('Id not found in the database, can not reset password.')
      }
      break
    case USER_ROLES.SUPERVISOR:
      user = await SupervisorModel.getSupervisorById(userMongoId)
      if (!user) {
        throw new UnprocessableError('Id not found in the database, can not reset password.')
      }
      break
    default:
      throw new Error('This type of user is not supported')
  }

  return user
}

const updateUser = async (userId: mongoose.Types.ObjectId, role: string, newPassword:string) => {
  const hashedPass = await bcrypt.hash(newPassword, 10)
  let user
  switch (role) {
    case USER_ROLES.PATIENT:
      user = await PatientModel.updatePatientPassword(userId, hashedPass)
      if (!user) {
        throw new UnprocessableError('Can\'/t update the patient password')
      }

      break
    case USER_ROLES.SUPERVISOR:
      user = await SupervisorModel.updateSupervisorPassword(userId, hashedPass)
      if (!user) {
        throw new UnprocessableError('can\'/t update the supervisor password')
      }
      break
    default:
      throw new Error('This type of user is not supported')
  }

  return user
}

/**
 *
 * @param email User email
 * @param role Patient or supervisor
 * @description Checks for the reset password token and sends an email to the user
 */
export const recoverPassword = async (email: string, url:string, role: USER_ROLES) => {
  const user = await decideUser(email, role)
  if (!user) {
    throw new UnprocessableError(`${role} was not found, please provide valid id`)
  }

  // check if there's an already registered token for the user if so delete it
  let token = await ResetPasswordTokenModel.findTokenByUserID(user._id)
  if (token) {
    await ResetPasswordTokenModel.removeToken(token._id)
  }

  const resetToken = crypto.randomBytes(32).toString('hex')
  token = await ResetPasswordTokenModel.createResetPasswordToken(user._id, resetToken)
  // refactor URL to environment variable later
  const link = `${url}${role}/${token.token}`
  const mailData : MailObject = {
    userName: user.name,
    userMail: [email],
    mailBody: `Please reset your password using this URL: ${link}`,
    subject: 'resetting password for wheele',
    url: link
  }

  await sendMail(mailData)
}

/**
 *
 * @param role Supervisor or Patient
 * @param token the auth token to update the password
 * @param newPassword the updated password
 * @description Reset the user password and send confirmation email
 */
export const resetPassword = async (role:string, token:string, newPassword: string) => {
  const tokenrecord = await ResetPasswordTokenModel.findToken(token)
  if (!tokenrecord) {
    throw new UnprocessableError('Invalid or Expired Token')
  }

  const user = await decideUserUsingId(tokenrecord.user_id, role)
  if (!user) {
    throw new UnprocessableError(`${role} was not found, please provide valid id`)
  }

  await updateUser(user._id, role, newPassword)

  const mailData : MailObject = {
    userName: user.name,
    userMail: [user.email],
    mailBody: `This is the confirmation mail showing the password for your wheele account under mail ${user.email} has been changed. Keep safe ans secure.`,
    subject: 'Your password has been changed',
    url: ' '
  }

  await sendMail(mailData)
}
