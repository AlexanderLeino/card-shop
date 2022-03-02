import mongoose from 'mongoose'
const { Schema} = require('mongoose')

const CardSetSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        maxlength: 4,
        required: true,
    },
    
    totalNumberOfCardsInSet: {
        type: Number,
        maxlength: 3,
        required: true,
    }
}) 

const CardSet = mongoose.Model('CardSet', CardSetSchema)

module.exports = CardSet