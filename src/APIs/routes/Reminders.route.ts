import * as RemindersController from '../controllers/Reminders.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validatePatientId,
  validateReminderCreation,
  validateReminderDeletion,
  validateReminderId,
  validateReminderUpdate,
  validateSupervisorId
} from '../validators/Reminders.validator'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'

const router = express.Router()
router.get(
  '/patients/:id',
  validatePatientId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({
      req,
      res,
      next,
      fn: RemindersController.getAllRemindersByPatientId
    })
  }
)

router.get(
  '/supervisors/:id',
  validateSupervisorId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({
      req,
      res,
      next,
      fn: RemindersController.getAllRemindersBySupervisorId
    })
  }
)

router.get(
  '/:id',
  validateReminderId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.getReminder })
  }
)

router.post(
  '/',
  validateReminderCreation,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.createReminder })
  }
)

router.delete(
  '/:id',
  validateReminderDeletion,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.deleteReminder })
  }
)

router.put(
  '/:id',
  validateReminderUpdate,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.updateReminder })
  }
)

export default router
