import * as NotificationModel from '../models/Notifications.model'
import { NotificationObjectType } from '../types/Notifications.type'

export const createNotification = (notificationObject: NotificationObjectType) =>
  NotificationModel.createNotification(notificationObject)
