import * as SupervisorServices from '../services/Supervisors.services'
import { RequestHandler } from 'express'

export const supervisiorSignUp: RequestHandler = async ({ body, file }) => {
  let profilePictureFileId
  // @ts-ignore becasue property id doesn't exist on type file as it's not supported by docs
  if (file.id === undefined) {
    profilePictureFileId = ''
  }
  // @ts-ignore
  profilePictureFileId = file.id
  const supervisor = await SupervisorServices.createSupervisor(body, profilePictureFileId)

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
    message: "Supervisor's data Successfully Fetched"
  }
}

export const filterSupervisorsByName: RequestHandler = async ({ query }) => {
  const name: any = query.name
  const response = await SupervisorServices.filterSupervisorsByName(name)

  return {
    response,
    message: "Supervisors's data Successfully Fetched"
  }
}
