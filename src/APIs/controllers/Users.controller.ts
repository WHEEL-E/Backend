import * as LoginService from '../services/Login.services'
import {
  resendVerificationMail,
  verifyMail
} from '../services/VerificationMail.services'
import { RequestHandler } from 'express'
import { USER_ROLES } from '../types/User.types'
import mongoose from 'mongoose'

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
    new mongoose.Types.ObjectId(body.user_id),
    body.verificationToken,
    body.userType as USER_ROLES
  )

  return {
    response: response,
    message: 'Your mail has been verified successfully'
  }
}

export const resendVerificationMailController: RequestHandler = async ({
  body
}) => {
  const response = await resendVerificationMail(
    new mongoose.Types.ObjectId(body.user_id),
    body.email,
    body.userName || undefined,
    body.url
  )

  return {
    response: response,
    message: 'New Verification Mail has just been sent successfully'
  }
}

export const recoverPassword: RequestHandler = async ({ body }) => {
  const response = await LoginService.recoverPassword(body.email, body.role)

  return {
    response: response,
    message: 'Email was sent to the user to reset password'
  }
}

export const resetPassword: RequestHandler = async ({ params, body }) => {
  const response = await LoginService.resetPassword(params.role, params.token, body.password)

  return {
    response: response,
    message: 'Email was sent to the user to confirm the reset of password'
  }
}
