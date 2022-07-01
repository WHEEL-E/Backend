import * as SupervisorServices from '../services/Supervisors.services'
import { RequestHandler } from 'express'
import mongoose from 'mongoose'
import { sendVerificationMail } from '../services/VerificationMail.services'
import { SupervisorObjectType } from '../types/Supervisor.type'

export const supervisorSignUp: RequestHandler = async ({ body, file }) => {
  let profilePictureFileId
  // @ts-ignore becasue property id doesn't exist on type file as it's not supported by docs
  if (file.id === undefined) {
    profilePictureFileId = ''
  }
  // @ts-ignore
  profilePictureFileId = file.id
  
  const supervisorData : SupervisorObjectType ={
    name:body.name,
    email:body.email,
    password: body.password,
    phone: Number(body.phone),
    gender: body.gender,
    profile_picture:""
  }

  const supervisor = await SupervisorServices.createSupervisor(
    supervisorData,
    profilePictureFileId
  )
  await sendVerificationMail(supervisor.email, supervisor._id, supervisor.name)

  return {
    response: supervisor,
    message:
      'Supervisor created successfully, and Verification Mail has been sent'
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
  const response = await SupervisorServices.getSupervisorById(
    new mongoose.Types.ObjectId(params.id)
  )

  return {
    response,
    message: 'Supervisor\'s data Successfully Fetched'
  }
}

export const filterSupervisorsByName: RequestHandler = async ({ query }) => {
  const name: any = query.name
  const response = await SupervisorServices.filterSupervisorsByName(name)

  return {
    response,
    message: 'Supervisors\'s data Successfully Fetched'
  }
}

export const getSupervisorProfilePicture: RequestHandler = async ({
  params
}) => {
  const response = await SupervisorServices.getSupervisorProfilePicture(
    params.id
  )

  return {
    response,
    message: 'Supervisor\'s profile picture Successfully Fetched'
  }
}
