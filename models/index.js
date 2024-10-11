const mongoose = require('mongoose')
const ReviewSchema = require('./review')
const ActorSchema = require('./actor')
const MovieSchema = require('./movie')

const Review = mongoose.model('Review', ReviewSchema)
const Actor = mongoose.model('Actor', ActorSchema)
const Movie = mongoose.model('Movie', MovieSchema)

module.exports = {
    Review,
    Actor,
    Movie
}