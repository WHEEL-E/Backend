import * as PatientsServices from '../services/Patient.services'
import { CreatePatientObjectType } from '../types/Patient.type'
import { RequestHandler } from 'express'
import mongoose from 'mongoose'
import { sendVerificationMail } from '../services/VerificationMail.services'

export const getAllPatientsBySupervisorId: RequestHandler = async ({
  params
}) => {
  const supervisorId = new mongoose.Types.ObjectId(params.id)
  const response = await PatientsServices.getAllPatientsBySupervisorId(
    supervisorId
  )

  return {
    response: response,
    message: 'Patients retrieved successfully'
  }
}

export const getAllPatients: RequestHandler = async () => {
  const response = await PatientsServices.getAllPatients()

  return {
    response: response,
    message: 'Patients retrieved successfully'
  }
}

export const getPatient: RequestHandler = async ({ params }) => {
  const patientId = new mongoose.Types.ObjectId(params.id)
  const response = await PatientsServices.getPatient(patientId)

  return {
    response: response,
    message: 'Patient retrieved successfully'
  }
}

export const createPatient: RequestHandler = async ({ body, file }) => {
  const patientInfo: CreatePatientObjectType = {
    patient_name: body.patient_name,
    email: body.email,
    password: body.password,
    phone: Number(body.phone),
    emergency_number: Number(body.emergency_number),
    dob: new Date(body.dob),
    address: body.address,
    gender: body.gender,
    height: Number(body.height),
    weight: Number(body.weight),
    smoking: Boolean(body.smoking),
    notification_token: body.notification_token
  }

  // @ts-ignore
  const profilePictureFileId = file === undefined ? '' : file.id
  const response = await PatientsServices.createPatient(
    patientInfo,
    profilePictureFileId
  )

  await sendVerificationMail(
    response?.email as string,
    response?._id as mongoose.Types.ObjectId,
    response?.name,
    body.url
  )

  return {
    response: response,
    message:
      'Patient created successfully, and Verification Mail has been sent'
  }
}

export const deletePatient: RequestHandler = async ({ params }) => {
  const patientId = new mongoose.Types.ObjectId(params.id)
  const response = await PatientsServices.deletePatient(patientId)

  return {
    response: response,
    message: 'Patient deleted successfully'
  }
}

export const updatePatient: RequestHandler = async ({ body, params }) => {
  const patientId = new mongoose.Types.ObjectId(params.id)
  const updatePatientInput: CreatePatientObjectType = {
    patient_name: body.patient_name,
    email: body.email,
    address: body.address,
    dob: body.dob,
    emergency_number: body.emergency_number,
    gender: body.gender,
    height: body.height,
    password: body.password,
    phone: body.phone,
    smoking: body.smoking,
    weight: body.weight,
    profile_picture: body.profile_picture
  }

  const response = await PatientsServices.updatePatient(
    patientId,
    updatePatientInput
  )

  return {
    response: response,
    message: 'Patient updated successfully'
  }
}

export const getPatientProfilePicture: RequestHandler = async ({ params }) => {
  const response = await PatientsServices.getPatientProfilePicture(params.id)

  return {
    response,
    message: 'Patients\'s profile picture successfully fetched'
  }
}

export const getPatientMedicalRecords: RequestHandler = async ({ params }) => {
  const patientId = new mongoose.Types.ObjectId(params.id)
  const response = await PatientsServices.getPatientMedicalRecords(patientId)

  return {
    response,
    message: 'Patients\'s medical records successfully fetched'
  }
}

export const uploadMedicalRecord: RequestHandler = async ({ params, file }) => {
  let fileMedicalRecord
  const patientId = new mongoose.Types.ObjectId(params.id)
  // @ts-ignore
  if (file.id === undefined) {
    fileMedicalRecord = ''
  }
  // @ts-ignore
  fileMedicalRecord = file.id
  const response = await PatientsServices.uploadMedicalRecord(
    patientId,
    fileMedicalRecord
  )

  return {
    response,
    message: 'Patients\'s Health Record Was Added Successfully'
  }
}
