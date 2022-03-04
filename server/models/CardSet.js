const { Schema, model} = require('mongoose')

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
        maxlength: 4,
        required: true,
    }
}) 

const CardSet = model('CardSet', CardSetSchema)

module.exports = CardSet