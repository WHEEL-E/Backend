import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateSupervisorCreation = [
  body('name')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'name' is required"),

  body('email')
    .isString()
    .isEmail()
    .withMessage("Insuffecient parameters. 'email' is Invalid")
    .exists()
    .withMessage("Insuffecient parameters. Invalid 'mail' is required"),

  body('password')
    .isString()
    .isLength({ min: 8 })
    .withMessage(
      'Insuffecient parameters. Password must be at least 8 characters long'
    )
    .exists()
    .withMessage("Insuffecient parameters. Invalid 'password' is required"),

  body('phone')
    .isNumeric()
    .isMobilePhone('any')
    .withMessage("Insuffecient parameters. 'phone' is Invalid")
    .exists()
    .withMessage("Insuffecient parameters. 'phone' is required"),

  body('gender')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'gender' is required"),
  // Temp check till implement file upload
  body('profile_picture')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'phone' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateSupervisorUpdate = [
  body('name')
    .isString()
    .optional({ checkFalsy: true })
    .withMessage("Insuffecient parameters. 'name' is required"),

  body('email')
    .isString()
    .isEmail()
    .withMessage("Insuffecient parameters. 'email' is Invalid")
    .optional()
    .withMessage("Insuffecient parameters. Invalid 'mail' is required"),

  body('password')
    .isString()
    .isLength({ min: 8 })
    .withMessage(
      'Insuffecient parameters. Password must be at least 8 characters long'
    )
    .optional()
    .withMessage("Insuffecient parameters. Invalid 'password' is required"),

  body('phone')
    .isNumeric()
    .isMobilePhone('any')
    .withMessage("Insuffecient parameters. 'phone' is Invalid")
    .optional()
    .withMessage("Insuffecient parameters. 'phone' is required"),

  body('gender')
    .isString()
    .optional()
    .withMessage("Insuffecient parameters. 'gender' is required"),
  // Temp check till implement file upload
  body('profile_picture')
    .isString()
    .optional()
    .withMessage("Insuffecient parameters. 'phone' is required"),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateSupervisorID = [
  param('id')
    .isString()
    .exists()
    .withMessage("Insuffecient parameters. 'id' is required"),
  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
