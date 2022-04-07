import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateNotificationCreation = [
  body('title')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'title' is required"),

  body('description')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. Invalid 'description' is required"),

  body('type')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. Invalid 'type' is required"),

  body('userID')
    .isNumeric()
    .exists()
    .withMessage("Insuffecient parameters. 'userID' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
