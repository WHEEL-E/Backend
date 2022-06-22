import * as FileModel from '../models/Files.model'
import * as PatientModel from '../models/Patient.model'
import { CreatePatientObjectType } from '../types/Patient.type'
import { UnprocessableError } from '../types/general.types'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export const getAllPatients = () => {
  const patients = PatientModel.getAllPatients()
  if (!patients) {
    throw new UnprocessableError('Could not fetch patients')
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

export const getPatientHealthRecords = async (patientId: mongoose.Types.ObjectId) => {
  const patient = await PatientModel.getPatient(patientId)
  if (!patient) {
    throw new UnprocessableError('Could not fetch patient')
  }

  const { medical_history } = patient
  const healthRecords : string[] = []

  for (let i = 0; i < medical_history.length; i++) {
    const file = await FileModel.getHealthRecord(medical_history[i])
    if (!file) {
      return new Error('file not found in the database')
    }

    healthRecords.push(file)
  }

  return healthRecords
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

export const getPatientProfilePicture = async (patientId:string) => {
  const patientID = new mongoose.Types.ObjectId(patientId)
  const patient = await PatientModel.getPatient(patientID)
  if (!patient) {
    throw new UnprocessableError('Patient not found')
  }

  const { profile_picture } = patient
  if (!profile_picture) {
    throw new UnprocessableError('Patient does not have a profile picture')
  }

  const imageFile = FileModel.getProfilePicture(profile_picture)

  return imageFile
}

export const uploadHealthRecord = async (
  patientId: mongoose.Types.ObjectId,
  healthRecord: string
) => {
  const patient = await PatientModel.uploadHealthRecord(patientId, healthRecord)
  if (!patient) {
    throw new UnprocessableError('Could not add health record to the patient profile')
  }

  return patient
}
