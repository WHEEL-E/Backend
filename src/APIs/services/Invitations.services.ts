import * as InvitationModels from '../models/Invitations.model'
import {
  CreateInvitationObjectType,
  InvitationStatus
} from '../types/Invitation.types'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'

export const sendInvitationService = async (
  invitation: CreateInvitationObjectType
) => {
  const response = InvitationModels.createInvitation(invitation)
  //   TODO: Send invitation Notification to supervisor

  return response
}

export const resendInvitationService = async (inivitationID: number) => {
  const response = InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.PENDING
  )
  //   TODO: Send Reinvitation Notification to supervisor

  return response
}

export const UpdateInvitationService = async (
  inivitationID: number,
  newState: InvitationStatus
) => InvitationModels.updateInvitation(inivitationID, newState)

export const deleteInvitation = async (id: number) =>
  InvitationModels.deleteInvitation(id)

export const getInvitations = async (userID: number, userType: USER_ROLES) => {
  switch (userType) {
    case USER_ROLES.PATIENT:
      return await InvitationModels.getPatientInvitations(userID)

    case USER_ROLES.SUPERVISOR:
      return await InvitationModels.getSupervisorInvitations(userID)

    default:
      throw new UnprocessableError("User type doesn't exist")
  }
}

export const acceptInvitation = async (inivitationID: number) => {
  const response = await InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.ACCEPTED
  )
  // TODO: Send accepting notification to patient
  // TODO: Send Link Patient to Supervisor

  return response
}

export const rejectInvitation = async (inivitationID: number) => {
  const response = await InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.REJECTED
  )
  // TODO: Send accepting notification to patient

  return response
}
