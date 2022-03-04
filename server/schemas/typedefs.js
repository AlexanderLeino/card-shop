const { gql } = require('apollo-server-express')

const typeDefs = gql`

    type User {
       _id: ID!
       userName: String!
       firstName: String
       lastName: String
       email: String!
       password: String!
       collection: [PokemonCard]
       
    }

    type CardSet {
        _id: ID!
        name: String!
        year: Int!
        totalIntOfCardsInSet: Int  
    }

    type PokemonCard {
        _id: ID!
        name: String!
        tags: String!
        energy: String
        variant: String
        trainerType: String
        abilityOne: String
        abilityOneDescription: String
        abilityOneDamage: String
        abilityTwo: String
        abilityTwoDescription: String
        abilityTwoDamage: String
        language: String
        cardInt: String!
        rarity: String!
        illustrator: String!
        hp: Int
        cardSet: CardSet!
        cardValue: Int
    }

    type Cart {
        _id: ID!
        buyer: User
        items: [PokemonCard]
    }

`

module.exports = typeDefs