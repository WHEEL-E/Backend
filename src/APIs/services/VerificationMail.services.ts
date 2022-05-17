import * as VerificationMailModel from '../models/VerificationTokens.model'
import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'
import { getPatient } from './Patient.services'
import { getSupervisorById } from './Supervisors.services'
import mongoose from 'mongoose'
import { updateSupervisorVerificationStatus } from '../models/Supervisor.model'
import { updateVerificationStatus } from '../models/Patient.model'

const generateToken = async (id: mongoose.Types.ObjectId, email: string) => {
  const verficationToken = await jwt.sign(
    { data: { id: id, user_email: email, tag: 'VerficationToken' } },
    'My_SECRET',
    { expiresIn: '2h' }
  )

  await VerificationMailModel.createVerificationToken(id, verficationToken)

  return verficationToken
}

export const sendVerificationMail = async (
  email: string,
  id: mongoose.Types.ObjectId
) => {
  const token = await generateToken(id, email)
  console.log(token)
  // Call Emailing Service
  // Return Token to the front end
}

export const verifyMail = async (
  id: mongoose.Types.ObjectId,
  token: string,
  userType: USER_ROLES
) => {
  const user = await UserVariations(id, userType, 'get')
  if (!user) {
    throw new UnprocessableError(
      `${userType} was not found, please provide valid id`
    )
  }
  const verificationToken = await VerificationMailModel.findToken(id, token)
  if (!verificationToken) {
    throw new UnprocessableError('Invalid Token')
  }

  const updatedUser = await UserVariations(id, userType, 'update')
  await VerificationMailModel.removeToken(verificationToken._id)

  return updatedUser
}

const UserVariations = async (
  id: mongoose.Types.ObjectId,
  userType: USER_ROLES,
  ToDo: 'get' | 'update'
) => {
  let user
  switch (userType) {
    case USER_ROLES.PATIENT:
      user =
        ToDo === 'get'
          ? await getPatient(id)
          : await updateVerificationStatus(id, true)
      break
    case USER_ROLES.SUPERVISOR:
      user =
        ToDo === 'get'
          ? await getSupervisorById(id)
          : await updateSupervisorVerificationStatus(id, true)
      break
    default:
      throw new UnprocessableError('No User Type Found')
  }

  return user
}

export const resendVerificationMail = async (
  id: mongoose.Types.ObjectId,
  email: string
) => {
  const verificationToken = await VerificationMailModel.findTokenByUserID(id)
  if (verificationToken) {
    // Call Sending Mail Service Here
    // Return Token to the front end
  }

  const newToken = await generateToken(id, email)
  console.log(newToken)

  // Call Emailing Service
  // Return Token to the front end
}
