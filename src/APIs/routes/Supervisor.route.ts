import * as SupervisorController from '../controllers/Supervisor.controller'
import * as SupervisorValidator from '../validators/Supervisor.validator'
import express, { NextFunction, Request, Response } from 'express'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'
import uploadPhotosMiddleware from '../middlewares/uploadPhotosMiddleware'

const router = express.Router()

router.get(
  '/search',
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({
      req,
      res,
      next,
      fn: SupervisorController.filterSupervisorsByName
    })
)

router.get(
  '/photos/:id',
  SupervisorValidator.validateSupervisorID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({
      req,
      res,
      next,
      fn: SupervisorController.getSupervisorProfilePicture
    })
)

router.get(
  '/:id',
  SupervisorValidator.validateSupervisorID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.getSupervisorById })
)

router.get(
  '/',
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.getAllSupervisors })
)
router.post(
  '/',
  uploadPhotosMiddleware,
  SupervisorValidator.validateSupervisorCreation,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.supervisiorSignUp })
)

router.put(
  '/:id',
  SupervisorValidator.validateSupervisorUpdate,
  SupervisorValidator.validateSupervisorID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.updateSupervisor })
)

router.delete(
  '/:id',
  SupervisorValidator.validateSupervisorID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) =>
    handler({ req, res, next, fn: SupervisorController.deleteSupervisor })
)

export default router
