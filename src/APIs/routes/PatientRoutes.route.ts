import * as PatientController from '../controllers/Patient.controller'
import express, { NextFunction, Request, Response } from 'express'
import { validatePatientCreation, validatePatientDeletion, validatePatientId, validateSupervisorId } from '../validators/Patient.valdiator'
import { handler } from '.'
import uploadHealthRecordsStorage from '../middlewares/uploadHealthRecordsMiddleware'
import uploadPhotosMiddleware from '../middlewares/uploadPhotosMiddleware'

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

router.get(
  '/healthFiles/:id',
  validatePatientId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getPatientHealthRecords })
  }
)

router.post(
  '/',
  uploadPhotosMiddleware,
  validatePatientCreation,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.createPatient })
  }
)

router.post(
  '/healthFiles/:id',
  uploadHealthRecordsStorage,
  validatePatientId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.uploadHealthRecord })
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
