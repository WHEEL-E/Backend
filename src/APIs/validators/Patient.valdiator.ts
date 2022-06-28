import { NextFunction, Request, Response } from 'express'
import { body, param } from 'express-validator'
import validateResults from '../utilities/GeneralValidationFunction'

export const validatePatientCreation = [body('patient_name')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. \'patient_name\' is required'),

body('email')
  .isEmail()
  .exists()
  .withMessage('Insuffecient parameters. \'email\' is required'),

body('password')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'password\' is required'),

body('phone')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'phone\' is required'),

body('emergency_number')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'emergency_number\' is required'),

body('address')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'address\' is required'),

body('gender')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'gender\' is required'),

body('weight')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'weight\' is required'),

body('height')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'height\' is required'),

body('dob')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'dob\' is required'),

body('smoking')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. Invalid \'smoking\' is required'),
(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validatePatientDeletion = [param('id')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. \'user_id\' is required'),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validatePatientId = [param('id')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. \'id\' is required'),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]

export const validateSupervisorId = [param('id')
  .isString()
  .exists()
  .withMessage('Insuffecient parameters. \'id\' is required'),

(req: Request, res: Response, next: NextFunction) => {
  validateResults(req, res, next)
}]
