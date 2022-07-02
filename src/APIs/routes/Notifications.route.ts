import * as NotificationsController from '../controllers/Notifications.controller'
import * as NotificationsValidator from '../validators/Notifications.validator'
import express, { NextFunction, Request, Response } from 'express'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'

const router = express.Router()

router.get(
  '/:id',
  NotificationsValidator.validateNotificationID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({
      req,
      res,
      next,
      fn: NotificationsController.getUserNotifications
    })
)

router.post(
  '/',
  NotificationsValidator.validateNotificationCreation,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.createNotification })
)

router.put(
  '/:id',
  NotificationsValidator.validateNotificationCreation,
  NotificationsValidator.validateNotificationID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.editNotification })
)

router.post(
  '/push',
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.delteNotification })
)

router.delete(
  '/:id',
  NotificationsValidator.validateNotificationID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: NotificationsController.pushNotification })
)

export default router
