import {
  CreateInvitationObjectType,
  InvitationStatus
} from '../types/Invitation.types'
import Invitations from '../schema/Invitation.schems'
import mongoose from 'mongoose'

export const createInvitation = async (
  invitationInput: CreateInvitationObjectType
) => {
  const response = await Invitations.create(invitationInput)

  return response
}

export const updateInvitation = async (
  invitationID: number,
  newState: InvitationStatus
) => {
  const updatedInvitation = await Invitations.updateOne(
    new mongoose.Types.ObjectId(invitationID),
    {
      status: newState
    },
    { new: true }
  )

  return updatedInvitation
}

export const deleteInvitation = async (id: number) => {
  const invitation = await Invitations.findByIdAndDelete(
    new mongoose.Types.ObjectId(id)
  )

  return invitation
}

export const getPatientInvitations = async (patientID: number) => {
  const invitations = await Invitations.find({
    from_id: new mongoose.Types.ObjectId(patientID)
  })

  return invitations
}

export const getSupervisorInvitations = async (supervisorID: number) => {
  const invitations = await Invitations.find({
    from_id: new mongoose.Types.ObjectId(supervisorID)
  })

  return invitations
}
