const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const pokemonCardSchema = new Schema({
    
    name: {
        type:String,
        required: true,
    },
    
    tags: {
        type: String,
        enum: {
            values: ['Pokemon', 'Trainer', 'Energy']
        },
        default: 'Pokemon'
    },
    
    energy: {
        type: String,
        enum: {
            values: ["Grass", "Fire", "Water", "Lightning", "Psychic", "Fighting", "Darkness", "Metal", "Fairy"],
        },
        required: function() { return this.tags === 'Pokemon' || this.tags === 'Energy' }
    },
    variant: {
        type: String,
        required: function() { return this.tags === 'Pokemon' },
        enum: {
            values: ["EX", "GX", "Legend", "LV.X", "Prime", "Star", "BREAK", "VSTAR", "V", "VMAX", "None"]
        },

    },
    trainerType: {
        type: String,
        required: function() { return this.tags === 'Trainer' },
        enum: {
            values: ['Item', 'Stadium', 'Pokemon Tool', 'Supporter', 'Technical Machine', 'Ace Spec', "'Rocket's' Secret Machine", 'Goldenrod Game Corner' ]
        },
    },
    abilityOne: {
        type: String,
        required: function() { return this.tags != 'Energy' },
    },
    abilityOneDescription: {
        type: String,
        required: function() { return this.tags != 'Energy' }
    },
    abilityOneDamage: {
        type: String,
    },
    abilityTwo: {
        type: String,
    },
    abilityTwoDescription: {
        type: String,
        required: function() { return this.abilityTwo != null }
    },
    abilityTwoDamage: {
        type: String,
    },
    language: {
        type: String,
        required: true,
        enum: {
            values: ["English", "Japanese", "German", "French", "Italian", "Portuguese", "Spanish", "Korean", "Russian", "Indonesian","Thai", "Chinese", "Polish", "Dutch"],
            default: 'English'
        }
    },
    cardNumber: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        required: true,
        enum: {
            values: ["Common", "Uncommon", "Rare", "Holo Rare", "Reverse Holo Rare", "Ultra Rare", "Secret Rare", "Promo"]
        },

    },
    illustrator: {
        type: String,
        required: true
    },
    
    hp: {
        type: Number,
        required: function() { return this.tags === 'Pokemon' }
    },
    cardSet: {
        type: Schema.Types.ObjectId,
        ref: 'CardSet'
    },
    cardValue: {
        type: Number,
    },

})

const PokemonCard = model('PokemonCard', pokemonCardSchema)

module.exports = PokemonCard