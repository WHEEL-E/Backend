import * as PatientController from '../controllers/Patient.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validatePatientCreation,
  validatePatientDeletion,
  validatePatientId,
  validateSupervisorId
} from '../validators/Patient.valdiator'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'
import uploadMedicalRecordsStorage from '../middlewares/uploadMedicalRecordsMiddleware'
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
  validateSupervisorId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({
      req,
      res,
      next,
      fn: PatientController.getAllPatientsBySupervisorId
    })
  }
)

router.get(
  '/:id',
  validatePatientId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getPatient })
  }
)

router.get(
  '/healthFiles/:id',
  validatePatientId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.getPatientMedicalRecords })
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
  validatePatientId,
  uploadMedicalRecordsStorage,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.uploadMedicalRecord })
  }
)

router.delete(
  '/:id',
  validatePatientDeletion,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.deletePatient })
  }
)

router.put(
  '/:id',
  validatePatientCreation,
  validatePatientId,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: PatientController.updatePatient })
  }
)

export default router
