import express, { Application } from 'express'
import { TestingAll } from './APIs/models/TestingSchema'

const app: Application = express()
const port: number = 3000

require('./APIs/config/database_config')()
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Testing Schema code - will be removed on merging
TestingAll()
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
