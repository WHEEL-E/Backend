const mongoose = require('mongoose')
const config = require('config')

module.exports = function () {
  const db = config.get('db') || 'Please set up your database connection'
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to wheel.e database'))
}
