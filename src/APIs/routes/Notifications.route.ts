import * as NotificationsController from '../controllers/Notifications.controller'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'
import { validateNotificationCreation } from '../validators/Notifications.validator'

const router = express.Router()

router.post(
  '/',
  validateNotificationCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.createNotification })
)

export default router
