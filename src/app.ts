import {
  errorHanlder,
  notFoundHandler
} from './APIs/middlewares/errorHandlerMiddleware'
import express, { Application } from 'express'
import Routes from './APIs/routes/index'
import cors from 'cors'
import numeral from 'numeral'

const app: Application = express()
const port = 3000
const host = 'localhost'

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

setInterval(() => {
  const { rss } = process.memoryUsage()
  console.log(numeral(rss).format('0.0 ib'))
}, 5000)
