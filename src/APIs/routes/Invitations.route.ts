import * as InvitationController from '../controllers/Invitations.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateCreateData,
  validateID
} from '../validators/Invitations.validator'
import { handler } from '.'

const router = express.Router()

router.post(
  '/',
  validateCreateData,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.sendInvitation })
  }
)

router.get(
  '/invitation/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.getInvitation })
  }
)

router.get(
  '/userInvitations/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.getUserInvitations })
  }
)

router.put(
  '/resned/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.resendInvitation })
  }
)

router.put(
  '/accept/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.acceptInvitation })
  }
)
router.put(
  '/reject/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.rejectInvitation })
  }
)
router.delete(
  '/:id',
  validateID,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.deleteInvitation })
  }
)
export default router
