import * as SupervisorController from '../controllers/Supervisor.controller'
import * as SupervisorValidator from '../validators/Supervisor.validator'
import express, { NextFunction, Request, Response } from 'express'
import { handler } from '.'

const router = express.Router()

router.get('/search', (req: Request, res: Response, next: NextFunction) =>
  handler({ req, res, next, fn: SupervisorController.filterSupervisorsByName })
)

router.get(
  '/:id',
  SupervisorValidator.validateSupervisorID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.getSupervisorById })
)

router.get('/', (req: Request, res: Response, next: NextFunction) =>
  handler({ req, res, next, fn: SupervisorController.getAllSupervisors })
)
router.post(
  '/',
  SupervisorValidator.validateSupervisorCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.supervisiorSignUp })
)

router.put(
  '/:id',
  SupervisorValidator.validateSupervisorUpdate,
  SupervisorValidator.validateSupervisorID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.updateSupervisor })
)

router.delete(
  '/:id',
  SupervisorValidator.validateSupervisorID,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.deleteSupervisor })
)

export default router
