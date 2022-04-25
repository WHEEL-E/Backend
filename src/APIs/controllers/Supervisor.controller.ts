import * as SupervisorServices from '../services/Supervisors.services'
import { RequestHandler } from 'express'

export const supervisiorSignUp: RequestHandler = async ({ body }) => {
  const supervisor = await SupervisorServices.createSupervisor(body)

  return {
    response: supervisor,
    message: 'Successfully Registered'
  }
}

export const deleteSupervisor: RequestHandler = async ({ params }) => {
  const response = await SupervisorServices.deleteSupervisor(params.id)

  return {
    response,
    message: 'Supervisor Successfully Deleted'
  }
}

export const updateSupervisor: RequestHandler = async ({ params, body }) => {
  const response = await SupervisorServices.updateSupervisor(params.id, body)

  return {
    response,
    message: 'Supervisor Successfully Updated'
  }
}

export const getAllSupervisors: RequestHandler = async () => {
  const response = await SupervisorServices.getAllSupervisors()

  return {
    response,
    message: 'All Supervisors have been Successfully Fetched'
  }
}

export const getSupervisorById: RequestHandler = async ({ params }) => {
  const response = await SupervisorServices.getSupervisorById(params.id)

  return {
    response,
    message: 'Supervisor\'s data Successfully Fetched'
  }
}
