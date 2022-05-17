import * as LoginService from '../services/Login.services'
import { RequestHandler } from 'express'
import { USER_ROLES } from '../types/User.types'
import mongoose from 'mongoose'
import { verifyMail } from '../services/VerificationMail.services'

export const login: RequestHandler = async ({ body }) => {
  const response = await LoginService.login(
    body.email,
    body.password,
    body.role
  )

  return {
    response: response,
    message: 'User logged in successfully'
  }
}

export const verifyMailController: RequestHandler = async ({ body }) => {
  const response = await verifyMail(
    new mongoose.Types.ObjectId(body.id),
    body.token,
    body.userType as USER_ROLES
  )

  return {
    response: response,
    message: 'Your mail has been verified successfully'
  }
}
