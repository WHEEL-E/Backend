import * as SupervisiorModel from '../models/Supervisior.model'
import { SupervisorObjectType } from '../types/Supervisor.type'

export const createSupervisor = (supervisorData: SupervisorObjectType) =>
  SupervisiorModel.createSupervisior(supervisorData)
