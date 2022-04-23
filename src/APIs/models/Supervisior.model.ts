import SupervisiorModel from '../schema/Supervisior.schema'
import { SupervisorObjectType } from '../types/Supervisor.type'

export const createSupervisior = async (
  supervisiorDate: SupervisorObjectType
) => {
  const response = await SupervisiorModel.create(supervisiorDate)

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
