import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { BadRequestError } from '../types/general.types'

const validateResults = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const message = errors.array().map(single => `${single.msg} :'${single.param}'`).join(',')
    const error = new BadRequestError(message)
    throw error
  }
  next()
}

export default validateResults
