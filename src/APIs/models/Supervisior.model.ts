import SupervisiorModel from '../schema/Supervisior.schema'
import { SupervisorObjectType } from '../types/Supervisor.type'

export const createSupervisior = async (
  supervisiorDate: SupervisorObjectType
) => {
  const response = await SupervisiorModel.create(supervisiorDate)

  return response
}
