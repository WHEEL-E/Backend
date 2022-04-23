import * as NotificationsController from '../controllers/Notifications.controller'
import * as NotificationsValidator from '../validators/Notifications.validator'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'

const router = express.Router()

router.get(
  '/:id',
  NotificationsValidator.validateNotificationID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.getUserNotifications })
)

router.post(
  '/',
  NotificationsValidator.validateNotificationCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.createNotification })
)

router.put(
  '/:id',
  NotificationsValidator.validateNotificationCreation,
  NotificationsValidator.validateNotificationID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.editNotification })
)

router.delete(
  '/:id',
  NotificationsValidator.validateNotificationID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.delteNotification })
)

export default router
