import { NextFunction, Request, Response } from 'express'
import { AccessDeniedError } from '../types/general.types'

const validateRules = async (roles: string[], userRole: string) => {
  const results = await Promise.all(
    roles.map((role) => {
      if (role === userRole) {
        return true
      }

      return false
    })
  )

  return results.includes(true)
}

export const userAuthorization = (requiredRules: string[]) => {
  return async function (req: Request, res: Response, next: NextFunction) {
    const { currentUser } = res.locals
    const response = await validateRules(requiredRules, currentUser.role)
    if (!response) {
      const response = new AccessDeniedError(
        "You don't have the required permissions for this operation"
      )

      res.status(403).send(response)
    }

    return next()
  }
}
