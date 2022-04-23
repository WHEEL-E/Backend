import * as SupervisorController from '../controllers/Supervisor.controller'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'
import { validateSupervisorCreation } from '../validators/Supervisor.validator'

const router = express.Router()

router.post(
  '/',
  validateSupervisorCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.supervisiorSignUp })
)

export default router
