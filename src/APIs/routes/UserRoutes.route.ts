import * as UserController from '../controllers/Users.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateLoginInput,
  validateResendMailInput,
  validateVerifyMailInput
} from '../validators/User.validator'
import { handler } from '.'

const router = express.Router()

router.post(
  '/',
  validateLoginInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: UserController.login })
  }
)

router.post(
  '/verify-mail',
  validateVerifyMailInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: UserController.verifyMailController })
  }
)

router.post(
  '/resend-verification-mail',
  validateResendMailInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({
      req,
      res,
      next,
      fn: UserController.resendVerificationMailController
    })
  }
)

export default router
