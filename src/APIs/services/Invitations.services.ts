import * as InvitationModels from '../models/Invitations.model'
import {
  CreateInvitationObjectType,
  InvitationStatus
} from '../types/Invitation.types'
import { getPatient, linkSupervisor } from '../models/Patient.model'
import { getSupervisorById, linkPatient } from '../models/Supervisor.model'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'
import mongoose from 'mongoose'

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
  let invitations = []
  switch (userType) {
    case USER_ROLES.PATIENT:
      invitations = await InvitationModels.getPatientInvitations(userID)
      break

    case USER_ROLES.SUPERVISOR:
      invitations = await InvitationModels.getSupervisorInvitations(userID)
      break

    default:
      throw new UnprocessableError('User type doesn\'t exist')
  }

  const AllInvitations = await getInvitationDetails(invitations as [])

  return AllInvitations
}

export const acceptInvitation = async (inivitationID: string) => {
  const response = await InvitationModels.updateInvitation(
    inivitationID,
    InvitationStatus.ACCEPTED
  )
  const invitation = await InvitationModels.getInvitation(inivitationID)
  if (!invitation) {
    throw new UnprocessableError('Invitation not found')
  }

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

const getInvitationDetails = async (invitations: []) => {
  const AllInvitations: any = []
  await Promise.all(
    invitations.map(async (invitation) => {
      const { from_id, to_id } = invitation
      const patient = await getPatient(new mongoose.Types.ObjectId(from_id))
      const supervisor = await getSupervisorById(
        new mongoose.Types.ObjectId(to_id)
      )

      AllInvitations.push({
        invitation,
        patient: {
          name: patient?.name,
          photo: patient?.profile_picture,
          gender: patient?.gender,
          birthDate: patient?.dob
        },
        supervisorName: supervisor.name,
        supervisorPhoto: supervisor.profile_picture
      })
    })
  )

  return AllInvitations
}
