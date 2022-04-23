import express, { NextFunction, Request, Response } from 'express'
import * as NotificationsController from '../controllers/Notifications.controller'
import { handler } from '.'
import * as NotificationsValidator from '../validators/Notifications.validator'

const router = express.Router()

router.post(
  '/',
  NotificationsValidator.validateNotificationCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.createNotification })
)

router.delete(
  '/:id',
  NotificationsValidator.validateNotificationID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.delteNotification })
)

export default router
