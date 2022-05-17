import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateID = [
  param('id')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'id' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateCreateData = [
  body('from_id')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'Patient' is required"),

  body('to_id')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'Supervisor' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
