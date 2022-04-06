import express, { Application } from 'express'

const app: Application = express()
const port: number = 3000

require('./APIs/config/database_config')()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
