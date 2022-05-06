import * as LoginController from '../controllers/Login.controller'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'
import { validateLoginInput } from '../validators/Login.validator'

const router = express.Router()

router.post(
  '/',
  validateLoginInput,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: LoginController.login })
  }
)

export default router
