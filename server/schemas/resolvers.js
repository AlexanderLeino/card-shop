const { User, CardSet, PokemonCard, Cart } = require('../models')
const { SignToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, { _id }) => {
            const user = await User.findById(_id).populate({
                path: 'cardCollection',
                model: 'PokemonCard'
            })
            return user
        },
        pokemonCard: async (parent, {_id}) => {
            const pokemonCard = await PokemonCard.findById(_id)
            return pokemonCard
        }
    }
}

module.exports = resolvers