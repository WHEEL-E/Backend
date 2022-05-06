import * as PatientsServices from '../services/Patient.services'
import { CreatePatientObjectType } from '../types/Patient.type'
import { RequestHandler } from 'express'
import mongoose from 'mongoose'

export const getAllPatientsBySupervisorId: RequestHandler = async ({ params }) => {
  const supervisorId = new mongoose.Types.ObjectId(params.id)
  const response = await PatientsServices.getAllPatientsBySupervisorId(supervisorId)

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

export const createPatient: RequestHandler = async ({ body }) => {
  const response = await PatientsServices.createPatient(body)

  return {
    response: response,
    message: 'Patient created successfully'
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
  const updatePatientInput : CreatePatientObjectType = {
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
    weight: body.weight
  }

  const response = await PatientsServices.updatePatient(patientId, updatePatientInput)

  return {
    response: response,
    message: 'Patient updated successfully'
  }
}