import { RequestHandler } from 'express'
import * as NotificationServices from '../services/Notifications.services'

export const createNotification: RequestHandler = async ({ body }) => {
  const response = await NotificationServices.createNotification(body)

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

export const getUserNotifications : RequestHandler = async ({ params }) => {
  const response = await NotificationServices.getUserNotifications(params.id)

  return {
    response: response,
    message: 'Notifications have been fetched successfully'
  }
}
