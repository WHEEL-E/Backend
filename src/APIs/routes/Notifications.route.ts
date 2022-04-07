import express, { Request, Response, NextFunction } from 'express'
import * as NotificationsController from '../controllers/Notifications.controller'
import { handler } from '.'

const router = express.Router()

router.post('/', (req: Request, res: Response, next: NextFunction) =>
  handler({ req, res, next, fn: NotificationsController.createNotification })
)

export default router
