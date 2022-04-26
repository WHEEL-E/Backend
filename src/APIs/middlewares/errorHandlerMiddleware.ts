import { NextFunction, Request, Response } from 'express'
import { HttpError } from '../types/general.types'
import getTimeNowFormatted from '../utilities/FormatTime'

export const errorHanlder = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorNum = (err as HttpError).statusCode ? err.statusCode : 500
  if (errorNum === 500) {
    console.error(`[ERROR: ${getTimeNowFormatted()}]`, err)
  }
  res.status(errorNum as number).json({
    status: 'error',
    message: errorNum === 500 ? 'Internal Server Error' : err
  })
}

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    status: 'error',
    message: 'Path Not found'
  })
}
