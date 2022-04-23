import * as SupervisorController from '../controllers/Supervisor.controller'
import * as SupervisorValidator from '../validators/Supervisor.validator'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'

const router = express.Router()

router.post(
  '/',
  SupervisorValidator.validateSupervisorCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.supervisiorSignUp })
)

router.delete(
  '/:id',
  SupervisorValidator.validateSupervisorID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.deleteSupervisor })
)

export default router
