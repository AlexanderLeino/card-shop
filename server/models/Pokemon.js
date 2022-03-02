import mongoose from "mongoose";
const { Schema } = require('mongoose')

const PokemonSchema = new Schema({

    name: {
        type:String,
        required: true,
    },
    
    energyType: {
        type: String,
        required: true,
        enum: {
            values: ["Grass", "Fire", "Water", "Ligthning", "Psychic", "Fighting", "Darkness", "Metal", "Fairy"],
        }
    },
    variant: {
        type: String,
        required: true,
        enum: {
            values: ["EX", "GX", "Legend", "LV.X", "Prime", "Star", "BREAK", "VSTAR", "V", "VMAX", "None"]
        }
    },
    abilityOne: {
        type: String,
        required: true,
    },
    abilityOneDescription: {
        type: String,
        required: true,
    },
    abilityTwo: {
        type: String,
        
    },
    abilityTwoDescription: {
        type: String,
        required: function() { return this.abilityTwo != null }
    },
    language: {
        type: String,
        required: true,
        enum: {
            values: ["English", "Japanese", "German", "French", "Italian", "Portuguese", "Spanish", "Korean", "Russian", "Indonesian","Thai", "Chinese", "Polish", "Dutch"]
        }
    },
    cardNumber: {
        type: String,
        required: true,
    },
    rarity: {
        type: String,
        enum: {
            values: ["Common", "Uncommon", "Rare", "Holo Rare", "Ultra Rare", "Secret Rare"]
        }
    }
})

const Pokemon = model('Pokemon', PokemonSchema)

module.exports = Pokemon