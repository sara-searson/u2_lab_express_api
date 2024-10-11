const { Schema } = require('mongoose')


const ActorSchema = new Schema(
 {
    name: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'Movie' },
    review: { type: String, required: true },
    score: { type: Number, min: 1, max: 5, required: true },
 },
 { timestamps: true }
)


module.exports = ActorSchema