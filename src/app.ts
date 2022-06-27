import {
  errorHanlder,
  notFoundHandler
} from './APIs/middlewares/errorHandlerMiddleware'
import express, { Application } from 'express'
import Routes from './APIs/routes/index'
import cors from 'cors'
import { sendMail } from './APIs/services/SendingMail.services'

const app: Application = express()
const port: number = 3000

const test = async () => {
  const data = await sendMail({
    userMail: ['mh249688@yahoo.com'],
    mailBody: 'Testing Mail Body',
    subject: 'Testing Mail',
    userName: 'Mohammed Hassan'
  })
  console.log(data)
}

test()

require('./APIs/config/database_config')()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', Routes)
app.use(errorHanlder)
app.use(notFoundHandler)

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
