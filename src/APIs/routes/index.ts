import NotesRoutes from './NotesRoutes.route'
import NotificationRoutes from './Notifications.route'
import PatientsRoutes from './PatientRoutes.route'
import { RouterHandlerInput } from '../types/general.types'
import express from 'express'

const router = express.Router()

export const handler = async ({
  req: { params, body, query, headers },
  res,
  next,
  fn
}: RouterHandlerInput) => {
  try {
    const data = await fn({ params, body, query, headers })
    res.status(200).json({
      message: data.message,
      data: data.response,
      status: 'Success'
    })
  } catch (err) {
    console.log(err)
    next(err)
  }
}

router.use('/notifications', NotificationRoutes)
router.use('/notes', NotesRoutes)
router.use('/patients', PatientsRoutes)

export default router
