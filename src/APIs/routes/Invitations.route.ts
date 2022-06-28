import * as InvitationController from '../controllers/Invitations.controller'
import express, { NextFunction, Request, Response } from 'express'
import {
  validateCreateData,
  validateID
} from '../validators/Invitations.validator'
import { checkAuthentication } from '../middlewares/userAuthentication'
import { handler } from '.'

const router = express.Router()

router.post(
  '/',
  validateCreateData,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.sendInvitation })
  }
)

router.get(
  '/invitation/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.getInvitation })
  }
)

router.get(
  '/userInvitations/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.getUserInvitations })
  }
)

router.put(
  '/resned/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.resendInvitation })
  }
)

router.put(
  '/accept/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.acceptInvitation })
  }
)
router.put(
  '/reject/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.rejectInvitation })
  }
)
router.delete(
  '/:id',
  validateID,
  checkAuthentication,
  (req: Request, res: Response, next: NextFunction) => {
    handler({ req, res, next, fn: InvitationController.deleteInvitation })
  }
)
export default router
