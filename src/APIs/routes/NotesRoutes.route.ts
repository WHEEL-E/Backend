import * as NotesController from '../controllers/Notes.controller'
import express, { NextFunction, Request, Response } from 'express'
import { validateNoteCreation, validateNoteDeletion, validateNoteId, validateNoteUpdate } from '../validators/Notes.validator'
import { handler } from '.'

const router = express.Router()
// we can add a user_id validation here later
router.get(
  '/user/:userID', (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.getAllNotes })
  }
)

router.get(
  '/:id',
  validateNoteId,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.getNote })
  }
)

router.post(
  '/',
  validateNoteCreation,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.createNote })
  }
)

router.delete(
  '/:id',
  validateNoteDeletion,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.deleteNote })
  }
)

router.put(
  '/',
  validateNoteUpdate,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: NotesController.updateNote })
  }
)

export default router
