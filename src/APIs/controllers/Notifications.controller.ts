import { RequestHandler } from 'express'
import * as NotificationServices from '../services/Notifications.services'

export const createNotification: RequestHandler = async ({ body }) => {
  const response = await NotificationServices.createNotification(body)

  return {
    response: response,
    message: 'Notification created successfully'
  }
}
