import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateReminderCreation = [body('patient_id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'patient_id' is required"),

body('supervisor_id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'supervisor_id' is required"),

body('title')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'title' is required"),

body('description')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. Invalid 'description' is required"),
body('due_date')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. Invalid 'due_date' is required"),
(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validateReminderDeletion = [param('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'id' is required"),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validateReminderUpdate = [param('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'id' is required"),

body('title')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'title' is required"),

body('description')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. Invalid 'description' is required"),
(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validateReminderId = [param('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'id' is required"),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]
