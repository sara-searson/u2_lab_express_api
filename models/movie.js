const { Schema } = require('mongoose')


const MovieSchema = new Schema(
 {
   title: { type: String, required: true },
   runtime_minutes: { type: Number, required: true },
   rating: { type: String, required: true },
   family_friendly: { type: Boolean },
   released: { type: Date, required: true },
   image: { type: String }
 },
 { timestamps: true }
)


module.exports = MovieSchema