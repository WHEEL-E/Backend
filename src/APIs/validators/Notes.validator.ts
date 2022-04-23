import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateNoteCreation = [body('user_id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'user_id' is required"),

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

export const validateNoteDeletion = [body('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'user_id' is required"),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validateNoteUpdate = [body('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'note_id' is required"),

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

export const validateNoteId = [body('id')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'id' is required"),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]
