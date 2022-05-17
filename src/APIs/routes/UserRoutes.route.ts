import * as UserController from '../controllers/Users.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateLoginInput,
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
  '/verify',
  validateVerifyMailInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: UserController.verifyMailController })
  }
)

export default router
