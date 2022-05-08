import * as PatientModel from '../models/Patient.model'
import * as SupervisorModel from '../models/Supervisor.model'
import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'
import bcyrpt from 'bcrypt'

export const login = async (email: string, password:string, role:string) => {
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
    throw new UnprocessableError('Email not found in the database, can not login.')
  }

  const validPass = bcyrpt.compare(user.password, password)
  if (!validPass) {
    throw new UnprocessableError('Password is invalid')
  }
  const token = generateToken(user._id, email, password)

  return {
    userId: user._id,
    userName: user.name,
    token: token
  }
}

const generateToken = (id:string, email:string, password:string) => {
  // TODO: move my_secret to environment variable
  return jwt.sign({ data: { id: id, user_email: email, pass: password } }, 'My_SECRET')
}
