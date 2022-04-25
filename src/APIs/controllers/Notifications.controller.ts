import * as NotificationServices from '../services/Notifications.services'
import { RequestHandler } from 'express'

export const createNotification: RequestHandler = async ({ body }) => {
  const response = await NotificationServices.createNotification(body)

  return {
    response: response,
    message: 'Notification created successfully'
  }
}
