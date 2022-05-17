import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateLoginInput = [
  body('email')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'email' is required"),

  body('password')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'password' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateVerifyMailInput = [
  body('id')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'User ID' is required"),

  body('token')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'Verification Token' is required"),

  body('userType')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'User Type' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
