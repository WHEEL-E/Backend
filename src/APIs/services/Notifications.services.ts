import * as NotificationModel from '../models/Notifications.model'
import { NotificationObjectType } from '../types/Notifications.type'
import { UnprocessableError } from '../types/general.types'

export const createNotification = (
  notificationObject: NotificationObjectType
) => NotificationModel.createNotification(notificationObject)

export const deleteNotification = (id: string) => {
  const response = NotificationModel.deleteNotification(id)
  if (!response) {
    throw new UnprocessableError('Notification not found')
  }

  return response
}
