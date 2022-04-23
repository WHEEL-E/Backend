import * as SupervisiorModel from '../models/Supervisior.model'
import { SupervisorObjectType } from '../types/Supervisor.type'
import { UnprocessableError } from '../types/general.types'

export const createSupervisor = (supervisorData: SupervisorObjectType) =>
  SupervisiorModel.createSupervisior(supervisorData)

export const deleteSupervisor = async (supervisorId: string) => {
  const supervisor = await SupervisiorModel.deleteSupervisior(supervisorId)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}

export const updateSupervisor = async (
  id: string,
  newData: SupervisorObjectType
) => {
  const supervisor = await SupervisiorModel.updateSupervisior(id, newData)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}

export const getAllSupervisors = async () => {
  const supervisors = await SupervisiorModel.getAllSupervisors()

  return supervisors
}

export const getSupervisorById = async (supervisorId: string) => {
  const supervisor = await SupervisiorModel.getSupervisorById(supervisorId)
  if (!supervisor) {
    throw new UnprocessableError('Supervisor not found')
  }

  return supervisor
}
