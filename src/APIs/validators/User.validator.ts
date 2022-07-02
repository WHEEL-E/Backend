import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateLoginInput = [
  body('email')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'email\' is required'),

  body('password')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'password\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateVerifyMailInput = [
  body('user_id')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User ID\' is required'),

  body('verificationToken')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'Verification Token\' is required'),

  body('userType')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User Type\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateResendMailInput = [
  body('user_id')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User ID\' is required'),

  body('email')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User Mail\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateForgetPasswordInput = [
  body('email')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User EMAIL\' is required'),

  body('role')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User ROLE\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateResetPasswordInput = [
  param('token')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User EMAIL\' is required'),

  param('role')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User ROLE\' is required'),

  body('password')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'User ROLE\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
