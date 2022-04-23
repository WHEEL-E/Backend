import * as NotificationsType from '../types/Notifications.type'
import NotificationsModel from '../Schema/Notifications.schema'

export const createNotification = async (
  notificationObject: NotificationsType.NotificationObjectType
) => {
  const response = await NotificationsModel.create(notificationObject)

  return response
}

export const getAllNotificationsByUserID = async (id: string) => {
  const notifications = NotificationsModel.find({ user_id: id })

  return notifications
}

export const editNotification = async (
  notificationID: string,
  newNotificationObject: NotificationsType.NotificationObjectType
) => {
  const newNotitication = await NotificationsModel.findByIdAndUpdate(
    notificationID,
    {
      $set: newNotificationObject
    }
  )

  return newNotitication
}

export const deleteNotification = async (id: string) => {
  const notification = await NotificationsModel.findByIdAndDelete(id)

  return notification
}
