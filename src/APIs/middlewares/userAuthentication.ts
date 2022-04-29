import { NextFunction, Request, Response } from 'express'
import { AccessDeniedError } from '../types/general.types'
import jwt from 'jsonwebtoken'

export const checkAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret = process.env.JWT_SECRET as jwt.Secret
  const token = req.headers.token

  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }
  try {
    const decoded = jwt.verify(token, secret)
    res.locals = decoded
  } catch (err) {
    throw new AccessDeniedError('Invalid Token')
  }

  return next()

  //   // temp mode
  //   res.locals = {
  //     currentUser: {
  //       id: 1
  //     }
  //   }
  //   next()
}
