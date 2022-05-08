import { NextFunction, Request, Response } from 'express'
import { body } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateLoginInput = [body('email')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'email' is required"),

body('password')
  .isString()
  .exists()
  .withMessage("Insuffecient parameters. 'password' is required"),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]
