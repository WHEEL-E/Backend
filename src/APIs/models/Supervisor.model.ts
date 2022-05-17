import SupervisiorModel from '../schema/Supervisior.schema'
import { SupervisorObjectType } from '../types/Supervisor.type'
import mongoose from 'mongoose'

export const createSupervisior = async (
  supervisorDate: SupervisorObjectType
) => {
  const response = await SupervisiorModel.create(supervisorDate)

  return response
}

export const updateSupervisior = async (
  id: string,
  newData: SupervisorObjectType
) => {
  const newSupervisior = await SupervisiorModel.findByIdAndUpdate(
    id,
    { $set: newData },
    { new: true }
  )

  return newSupervisior
}

export const deleteSupervisior = async (supervisorId: string) => {
  const response = await SupervisiorModel.findByIdAndDelete(supervisorId)

  return response
}

export const getAllSupervisors = async () => {
  const supervisors = await SupervisiorModel.find()

  return supervisors
}

export const getSupervisorById = async (supervisorId: string) => {
  const supervisor = await SupervisiorModel.findById(supervisorId)

  return supervisor
}

export const getSupervisorByEmail = async (email: string) => {
  const supervisor = await SupervisiorModel.findOne({ email: email })

  return supervisor
}

export const filterSupervisorsByName = async (name: string) => {
  const supervisors = await SupervisiorModel.find({
    name: { $regex: name, $options: 'i' }
  })

  return supervisors
}

export const linkPatient = async (
  supervisorID: mongoose.Types.ObjectId,
  patientID: mongoose.Types.ObjectId
) => {
  const supervisor = await SupervisiorModel.findById(
    new mongoose.Types.ObjectId(supervisorID)
  )

  supervisor.associated_patients.push(patientID)
  const res = await supervisor.save()

  return res
}
