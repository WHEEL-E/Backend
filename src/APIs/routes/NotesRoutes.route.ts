import * as NotesController from '../controllers/Notes.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateNoteCreation,
  validateNoteId,
  validateNoteUpdate
} from '../validators/Notes.validator'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'

const router = express.Router()
// we can add a user_id validation here later
router.get(
  '/user/:userID',
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.getAllNotes })
  }
)

router.get(
  '/:id',
  validateNoteId,

  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.getNote })
  }
)

router.post(
  '/',
  validateNoteCreation,

  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.createNote })
  }
)

router.delete(
  '/:id',
  validateNoteId,

  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.deleteNote })
  }
)

router.put(
  '/',
  validateNoteUpdate,

  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.updateNote })
  }
)

export default router
