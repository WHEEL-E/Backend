import * as NotificationServices from '../services/Notifications.services'
import { RequestHandler } from 'express'
import mongoose from 'mongoose'

export const createNotification: RequestHandler = async ({ body }) => {
  const response = await NotificationServices.createNotification({
    ...body,
    user_id: new mongoose.Types.ObjectId(body.user_id)
  })

  return {
    response: response,
    message: 'Notification has been created successfully'
  }
}

export const delteNotification: RequestHandler = async ({ params }) => {
  const response = await NotificationServices.deleteNotification(params.id)

  return {
    response: response,
    message: 'Notification has been deleted successfully'
  }
}

export const getUserNotifications: RequestHandler = async ({ params }) => {
  const response = await NotificationServices.getUserNotifications(params.id)

  return {
    response: response,
    message: 'Notifications have been fetched successfully'
  }
}

export const editNotification: RequestHandler = async ({ body, params }) => {
  const response = await NotificationServices.editNotification(params.id, body)

  return {
    response: response,
    message: 'Notification has been edited successfully'
  }
}

export const pushNotification: RequestHandler = async ({ body }) => {
  const response = await NotificationServices.push(body)

  return {
    response: response,
    message: 'Notification has been pushed successfully'
  }
}
