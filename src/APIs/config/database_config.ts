const mongoose = require('mongoose')

module.exports = function () {
  const db = 'mongodb+srv://wheeler:1234@backend-cluster.qrm0u.mongodb.net/test' || 'Please set up your database connection'
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected successfully to wheel.e database'))
}
