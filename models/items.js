const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieItemSchema = new Schema({
   
}, {timestamps: true})

const movieItem = mongoose.model('Designshop', movieItemSchema)


module.exports= movietItem