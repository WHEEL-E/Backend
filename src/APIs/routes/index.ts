import NotesRoutes from './NotesRoutes.route'
import NotificationRoutes from './Notifications.route'
import RemindersRoutes from './Reminders.route'
import { RouterHandlerInput } from '../types/general.types'
import SupervisorRoutes from './Supervisor.route'
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
router.use('/supervisor', SupervisorRoutes)
router.use('/notes', NotesRoutes)
router.use('/reminders', RemindersRoutes)

export default router
