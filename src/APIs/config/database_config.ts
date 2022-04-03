const mongoose = require('mongoose')
const config = require('config')

module.exports = function () {
  const db = config.get('db') || 'Set your atabase config please!'
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to wheel.e database'))
}
