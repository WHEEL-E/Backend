import {
  errorHanlder,
  notFoundHandler
} from './APIs/middlewares/errorHandlerMiddleware'
import express, { Application } from 'express'
import Routes from './APIs/routes/index'
import cors from 'cors'
import dotenv from 'dotenv'

const config = dotenv.config()

if (config.error) {
  throw config.error
}

const app: Application = express()
const port = process.env.PORT
const host = process.env.HOST

export const database = require('./APIs/config/database_config')()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', Routes)
app.use(errorHanlder)
app.use(notFoundHandler)

app.listen(port, () => {
  return console.log(`Express is listening at http://${host}:${port}`)
})
