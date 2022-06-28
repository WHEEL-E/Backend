import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validateNotificationCreation = [
  body('title')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'title\' is required'),

  body('description')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. Invalid \'description\' is required'),

  body('type')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. Invalid \'type\' is required'),

  body('user_id')
    .isString()
    .exists()
    .withMessage('Insuffecient parameters. \'user_id\' is required'),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]

export const validateNotificationID = [
  param('id')
    .exists()
    .withMessage('Insuffecient parameters. \'id\' is required')
    .isString(),

  (req: Request, res: Response, next: NextFunction) => {
    validateResults(req, res, next)
  }
]
