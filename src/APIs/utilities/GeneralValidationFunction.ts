import { NextFunction, Request, Response } from 'express'
import { BadRequestError } from '../types/general.types'
import { validationResult } from 'express-validator'

const validateResults = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const message = errors
      .array()
      .map((single) => `${single.msg} :'${single.param}'`)
      .join(',')
    const error = new BadRequestError(message)
    throw error
  }
  next()
}

export default validateResults
