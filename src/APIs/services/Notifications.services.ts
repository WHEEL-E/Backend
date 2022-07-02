import * as NotificationModel from '../models/Notifications.model'
import { NotificationObjectType } from '../types/Notifications.type'
import { USER_ROLES } from '../types/User.types'
import { UnprocessableError } from '../types/general.types'
import { UserVariations } from './VerificationMail.services'
import mongoose from 'mongoose'
import axios from 'axios'

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

export const editNotification = async (
  notificationID: string,
  newNotificationObject: NotificationObjectType
) => {
  const newNotitication = await NotificationModel.editNotification(
    notificationID,
    newNotificationObject
  )
  if (!newNotitication) {
    throw new UnprocessableError('Notification not found')
  }

  return newNotitication
}

export const push = async ({
  body,
  title,
  _id,
  userRole
}: {
  body: string;
  title: string;
  _id: string;
  userRole: USER_ROLES;
}) => {
  const { notification_token } = await UserVariations(
    new mongoose.Types.ObjectId(_id),
    userRole,
    'get'
  )

  if (!notification_token) {
    throw new UnprocessableError('User doesn\'t have a notification token ')
  }

  const res = await axios.post('https://exp.host/--/api/v2/push/send', {
    to: notification_token,
    title: title,
    body: body
  })

  return res
}
