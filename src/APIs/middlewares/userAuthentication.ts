import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { AccessDeniedError } from '../types/general.types'

export const checkAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret = process.env.JWT_SECRET as jwt.Secret
  const token = req.headers.token as string

  if (!token) {
    return res.status(403).send('A token is required for authentication')
  }
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload
    res.locals = decoded
  } catch (err) {
    throw new AccessDeniedError('Invalid Token')
  }

  return next()
}
