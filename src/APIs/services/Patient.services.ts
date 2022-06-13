import * as FileModel from '../models/Files.model'
import * as PatientModel from '../models/Patient.model'
import { CreatePatientObjectType } from '../types/Patient.type'
import { UnprocessableError } from '../types/general.types'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export const getAllPatients = () => {
  const patients = PatientModel.getAllPatients()
  if (!patients) {
    throw new UnprocessableError('Could not fetch patients ')
  }

  return patients
}

export const getAllPatientsBySupervisorId = (
  userId: mongoose.Types.ObjectId
) => {
  const patients = PatientModel.getAllPatientsBySupervisorId(userId)
  if (!patients) {
    throw new UnprocessableError('Could not fetch associated patients ')
  }

  return patients
}

export const getPatient = (patientId: mongoose.Types.ObjectId) => {
  const patient = PatientModel.getPatient(patientId)
  if (!patient) {
    throw new UnprocessableError('Could not fetch patient')
  }

  return patient
}

export const createPatient = async (
  createPatientInput: CreatePatientObjectType,
  profilePictureFileId: string
) => {
  const hashedPass = await bcrypt.hash(createPatientInput.password, 10)
  const response = await PatientModel.createPatient({
    ...createPatientInput,
    password: hashedPass,
    profile_picture: profilePictureFileId
  })

  return response
}

export const deletePatient = (patientId: mongoose.Types.ObjectId) => {
  const patient = PatientModel.deletePatient(patientId)

  if (!patient) {
    throw new UnprocessableError('Could not delete patient')
  }

  return patient
}

export const updatePatient = (
  patientId: mongoose.Types.ObjectId,
  patientUpdateInput: CreatePatientObjectType
) => {
  const patient = PatientModel.updatePatient(patientId, patientUpdateInput)
  if (!patient) {
    throw new UnprocessableError('could not update patient')
  }

  return patient
}

// @ts-ignore  will be deleted later after we agree upon using res to store the image data
export const getPatientProfilePicture = async (patientId:string, res) => {
  const patientID = new mongoose.Types.ObjectId(patientId)
  const patient = await PatientModel.getPatient(patientID)
  if (!patient) {
    throw new UnprocessableError('Patient not found')
  }

  const { profile_picture } = patient
  // refactor the ! later
  const imageFile = FileModel.getProfilePicture(profile_picture!, res)

  return imageFile
}

export const uploadHealthRecord = (
  patientId: mongoose.Types.ObjectId,
  healthRecord: string
) => {
  const patient = PatientModel.uploadHealthRecord(patientId, healthRecord)
  if (!patient) {
    throw new UnprocessableError('Could not add health record to the patient profile')
  }

  return patient
}
