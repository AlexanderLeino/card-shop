const { Schema, model} = require('mongoose')

const cartSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'PokemonCard'
    }]
})

const Cart = model('Cart', cartSchema)

module.exports = Cart