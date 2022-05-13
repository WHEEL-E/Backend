import {
  CreateInvitationObjectType,
  InvitationStatus
} from '../types/Invitation.types'
import Invitations from '../schema/Invitation.schems'
import mongoose from 'mongoose'

export const getInvitation = async (id: string) => {
  return await Invitations.findById(new mongoose.Types.ObjectId(id))
}

export const createInvitation = async (
  invitationInput: CreateInvitationObjectType
) => {
  const response = await Invitations.create(invitationInput)

  return response
}

export const updateInvitation = async (
  invitationID: string,
  newState: InvitationStatus
) => {
  const updatedInvitation = await Invitations.updateOne(
    { _id: new mongoose.Types.ObjectId(invitationID) },
    {
      status: newState
    },
    { new: true }
  )

  return updatedInvitation
}

export const deleteInvitation = async (id: string) => {
  const invitation = await Invitations.findByIdAndDelete(
    new mongoose.Types.ObjectId(id)
  )

  return invitation
}

export const getPatientInvitations = async (patientID: string) => {
  const invitations = await Invitations.find({
    from_id: new mongoose.Types.ObjectId(patientID)
  })

  return invitations
}

export const getSupervisorInvitations = async (supervisorID: string) => {
  const invitations = await Invitations.find({
    from_id: new mongoose.Types.ObjectId(supervisorID)
  })

  return invitations
}
