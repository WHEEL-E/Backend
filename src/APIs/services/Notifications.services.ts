import * as NotificationModel from '../models/Notifications.model'
import { NotificationObjectType } from '../types/Notifications.type'
import { UnprocessableError } from '../types/general.types'

export const createNotification = (
  notificationObject: NotificationObjectType
) => NotificationModel.createNotification(notificationObject)

export const deleteNotification = async (id: string) => {
  const response = await NotificationModel.deleteNotification(id)
  if (!response) {
    throw new UnprocessableError('Notification not found')
  }

  return response
}

export const getUserNotifications = (id: string) => {
  const response = NotificationModel.getAllNotificationsByUserID(id)

  return response
}

export const editNotification = async (notificationID: string, newNotificationObject: NotificationObjectType) => {
  const newNotitication = await NotificationModel.editNotification(notificationID, newNotificationObject)
  if (!newNotitication) {
    throw new UnprocessableError('Notification not found')
  }

  return newNotitication
}
