import * as RemindersController from '../controllers/Reminders.controller'
import express, { NextFunction, Request, Response } from 'express'
import { validateReminderCreation, validateReminderDeletion, validateReminderId, validateReminderUpdate } from '../validators/Reminders.validator'
import { handler } from '.'

const router = express.Router()
// not sure about the multiple functions to a single route ?
router.get(
  '/', (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.getAllRemindersByPatientId })
  }
)

router.get(
  '/', (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.getAllRemindersBySupervisorId })
  }
)

router.get(
  '/:id',
  validateReminderId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.getReminder })
  }
)

router.post(
  '/',
  validateReminderCreation,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.createReminder })
  }
)

router.delete(
  '/:id',
  validateReminderDeletion,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.deleteReminder })
  }
)

router.put(
  '/:id',
  validateReminderUpdate,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: RemindersController.updateReminder })
  }
)

export default router
