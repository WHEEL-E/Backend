import { NotificationObject } from '../types/Notifications.type'
import NotificationsModel from '../schema/Notifications.schema'

export const createNotification = async (
  notificationObject: NotificationObject
) => {
  const response = await NotificationsModel.create(notificationObject)
  return response
}
