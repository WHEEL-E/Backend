import express from 'express'
import { RouterHandlerInput } from '../types/general.types'
import NotificationRoutes from './Notifications.route'

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

export default router
