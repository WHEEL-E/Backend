import * as SupervisorServices from '../services/Supervisors.services'
import { RequestHandler } from 'express'

export const supervisiorSignUp: RequestHandler = async ({ body }) => {
  const supervisior = await SupervisorServices.createSupervisor(body)

  return {
    response: supervisior,
    message: 'Succefully Registered'
  }
}
