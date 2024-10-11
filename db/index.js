const mongoose = require('mongoose')


mongoose
 .connect('mongodb://127.0.0.1:27017/movieDatabase')
 .then(() => {
   console.log('connected to MongoDB.')
 })
 .catch((e) => {
   console.error('error', e.message)
 })
const db = mongoose.connection


module.exports = db