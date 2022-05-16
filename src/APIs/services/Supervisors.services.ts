import * as SupervisorModel from '../models/Supervisor.model'
import { SupervisorObjectType } from '../types/Supervisor.type'
import { UnprocessableError } from '../types/general.types'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export const createSupervisor = async (
  supervisorData: SupervisorObjectType
) => {
  const hashedPass = await bcrypt.hash(supervisorData.password, 10)
  const response = SupervisorModel.createSupervisior({
    ...supervisorData,
    password: hashedPass
  })

  return response
}

export const deleteSupervisor = async (supervisorId: string) => {
  const supervisor = await SupervisorModel.deleteSupervisior(supervisorId)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}

export const updateSupervisor = async (
  id: string,
  newData: SupervisorObjectType
) => {
  const supervisor = await SupervisorModel.updateSupervisior(id, newData)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}

export const getAllSupervisors = async () => {
  const supervisors = await SupervisorModel.getAllSupervisors()

  return supervisors
}

export const getSupervisorById = async (supervisorId: mongoose.Types.ObjectId) => {
  const supervisor = await SupervisorModel.getSupervisorById(supervisorId)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}

export const filterSupervisorsByName = async (name: string) =>
  SupervisorModel.filterSupervisorsByName(name)
