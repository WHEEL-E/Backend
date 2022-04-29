import * as PatientController from '../controllers/Patient.controller'
import express, { NextFunction, Request, Response } from 'express'
import { validatePatientCreation, validatePatientDeletion, validatePatientId, validateSupervisorId } from '../validators/Patient.valdiator'
import { handler } from '.'

const router = express.Router()
router.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getAllPatients })
  }
)

router.get(
  '/:id',
  validateSupervisorId, (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getAllPatientsBySupervisorId })
  }
)

router.get(
  '/:id',
  validatePatientId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getPatient })
  }
)

router.post(
  '/',
  validatePatientCreation,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.createPatient })
  }
)

router.delete(
  '/:id',
  validatePatientDeletion,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.deletePatient })
  }
)

router.put(
  '/:id',
  validatePatientCreation,
  validatePatientId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.updatePatient })
  }
)

export default router
