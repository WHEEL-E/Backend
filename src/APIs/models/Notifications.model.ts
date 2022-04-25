import * as NotificationsType from '../types/Notifications.type'
import NotificationsModel from '../Schema/Notifications.schema'
import mongoose from 'mongoose'

export const createNotification = async (
  notificationObject: NotificationsType.NotificationObjectType
) => {
  const response = await NotificationsModel.create(notificationObject)

  return response
}

export const getAllNotificationsByUserID = async (id: string) => {
  const notifications = NotificationsModel.find({
    user_id: new mongoose.Types.ObjectId(id)
  })

  return notifications
}

export const editNotification = async (
  notificationID: string,
  newNotificationObject: NotificationsType.NotificationObjectType
) => {
  const newNotitication = await NotificationsModel.findByIdAndUpdate(
    new mongoose.Types.ObjectId(notificationID),
    {
      $set: newNotificationObject
    },
    { new: true }
  )

  return newNotitication
}

export const deleteNotification = async (id: string) => {
  const notification = await NotificationsModel.findByIdAndDelete(
    new mongoose.Types.ObjectId(id)
  )

  return notification
}
