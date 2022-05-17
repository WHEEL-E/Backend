import * as InvitationServices from '../services/Invitations.services'
import { RequestHandler } from 'express'
import { USER_ROLES } from '../types/User.types'

export const sendInvitation: RequestHandler = async ({ body }) => {
  const response = await InvitationServices.sendInvitationService(body)

  return {
    response: response,
    message: 'Invitation sent successfully'
  }
}

export const getInvitation: RequestHandler = async ({ params }) => {
  const response = await InvitationServices.getInvitation(params.id)

  return {
    response: response,
    message: 'Invitation retrieved successfully'
  }
}

export const getUserInvitations: RequestHandler = async ({ params, query }) => {
  const userType = query.userType as USER_ROLES
  const response = await InvitationServices.getInvitations(params.id, userType)

  return {
    response: response,
    message: "User/'/s Invitations retrieved successfully"
  }
}

export const resendInvitation: RequestHandler = async ({ params }) => {
  const response = await InvitationServices.resendInvitationService(params.id)

  return {
    response: response,
    message: 'Invitation resent successfully'
  }
}

export const acceptInvitation: RequestHandler = async ({ params }) => {
  const response = await InvitationServices.acceptInvitation(params.id)

  return {
    response: response,
    message: 'Invitation accepted successfully'
  }
}

export const rejectInvitation: RequestHandler = async ({ params }) => {
  const response = await InvitationServices.rejectInvitation(params.id)

  return {
    response: response,
    message: 'Invitation rejected successfully'
  }
}

export const deleteInvitation: RequestHandler = async ({ params }) => {
  const response = await InvitationServices.deleteInvitation(params.id)

  return {
    response: response,
    message: 'Invitation deleted successfully'
  }
}
