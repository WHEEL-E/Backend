const mongoose = require('mongoose')

module.exports = function () {
  const db = process.env.DB || 'Please set up your database connection'
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to wheel.e database'))
}
