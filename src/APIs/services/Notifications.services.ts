import * as NotificationModel from '../models/Notifications.model'
import { NotificationObject } from '../types/Notifications.type'

export const createNotification = (notificationObject: NotificationObject) =>
  NotificationModel.createNotification(notificationObject)
