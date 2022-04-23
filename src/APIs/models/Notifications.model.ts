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
  const notifications = NotificationsModel.find({ user_id: id })

  return notifications
}

// export const editNotification = async (
//   newNotificationObject: NotificationsType.NotificationObjectType,
//   id: number
// ) => {
//   const note = await NotificationsModel.findByIdAndUpdate(id, {})
// }

export const deleteNotification = async (id: string) => {
  const notification = await NotificationsModel.findByIdAndDelete(
    new mongoose.Types.ObjectId(id)
  )

  console.log(id)
  console.log(new mongoose.Types.ObjectId(id))
  console.log(notification)
  // return notification
}
