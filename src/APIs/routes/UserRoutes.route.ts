import * as UserController from '../controllers/Users.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateForgetPasswordInput,
  validateLoginInput,
  validateResendMailInput,
  validateResetPasswordInput,
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

router.post(
  '/forgotPassword',
  validateForgetPasswordInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: UserController.recoverPassword })
  }
)
router.post(
  '/resetPassword/:role/:token',
  validateResetPasswordInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: UserController.resetPassword })
  }
)
export default router
