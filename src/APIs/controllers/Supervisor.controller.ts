import * as SupervisorServices from '../services/Supervisors.services'
import { RequestHandler } from 'express'

export const supervisiorSignUp: RequestHandler = async ({ body }) => {
  const supervisior = await SupervisorServices.createSupervisor(body)

  return {
    response: supervisior,
    message: 'Succefully Registered'
  }
}

export const deleteSupervisor: RequestHandler = async ({ params }) => {
  const response = await SupervisorServices.deleteSupervisor(params.id)

  return {
    response,
    message: 'Succefully Deleted'
  }
}

export const updateSupervisor: RequestHandler = async ({ params, body }) => {
  const response = await SupervisorServices.updateSupervisor(params.id, body)

  return {
    response,
    message: 'Succefully Updated'
  }
}
