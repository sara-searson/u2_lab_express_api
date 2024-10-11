const { Schema } = require('mongoose')


const ActorSchema = new Schema(
 {
   name: { type: String, required: true },
   age: { type: Number, required: true },
   alive: { type: Boolean },
   recent_movie: { type: Schema.Types.ObjectId, ref: 'Movie' }
 },
 { timestamps: true }
)


module.exports = ActorSchema