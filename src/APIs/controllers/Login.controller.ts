import * as LoginService from '../services/Login.services'
import { RequestHandler } from 'express'

export const login: RequestHandler = async ({ body }) => {
  const response = await LoginService.login(body.email, body.password)

  return {
    response: response,
    message: 'User logged in successfully'
  }
}
