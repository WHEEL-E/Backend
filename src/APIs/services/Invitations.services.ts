import * as InvitationModels from '../models/Invitations.model'
import {
  CreateInvitationObjectType,
  InvitationStatus
} from '../types/Invitation.types'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'
import { linkPatient } from '../models/Supervisor.model'
import { linkSupervisor } from '../models/Patient.model'

export const sendInvitationService = async (
  invitation: CreateInvitationObjectType
) => {
  const response = InvitationModels.createInvitation(invitation)
  //   TODO: Send invitation Notification to supervisor

  return response
}

export const resendInvitationService = async (inivitationID: string) => {
  const response = InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.PENDING
  )
  //   TODO: Send Reinvitation Notification to supervisor

  return response
}

export const UpdateInvitationService = async (
  inivitationID: string,
  newState: InvitationStatus
) => InvitationModels.updateInvitation(inivitationID, newState)

export const deleteInvitation = async (id: string) =>
  InvitationModels.deleteInvitation(id)

export const getInvitation = async (id: string) =>
  InvitationModels.getInvitation(id)

export const getInvitations = async (userID: string, userType: USER_ROLES) => {
  switch (userType) {
    case USER_ROLES.PATIENT:
      return await InvitationModels.getPatientInvitations(userID)

    case USER_ROLES.SUPERVISOR:
      return await InvitationModels.getSupervisorInvitations(userID)

    default:
      throw new UnprocessableError("User type doesn't exist")
  }
}

export const acceptInvitation = async (inivitationID: string) => {
  const response = await InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.ACCEPTED
  )
  const invitation = await InvitationModels.getInvitation(inivitationID)
  await linkPatient(invitation.to_id, invitation.from_id)
  await linkSupervisor(invitation.to_id, invitation.from_id)

  // TODO: Send accepting notification to patient
  return response
}

export const rejectInvitation = async (inivitationID: string) => {
  const response = await InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.REJECTED
  )
  // TODO: Send rejection notification to patient

  return response
}
