const { CardSet, User, PokemonCard, Cart } = require('../models')
const { Types: { ObjectId } } = require('mongoose')
const db = require('../config/connection')
let userId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
]

let cardSetId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]
let pokemonCardId = [
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
    ObjectId(),
]


const userData = [
    {
        _id: userId[0],
        userName: 'Demroy15',
        password: 'AlexanderLeino123',
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'Alexander.Leino@yahoo.com',
        cardCollection: [pokemonCardId[0]]
    },
    {
        _id: userId[1],
        userName: 'Leino',
        password: 'Leino1234',
        firstName: 'Alex',
        lastName: 'Leino',
        email: 'Alexander.Leino132@yahoo.com',
    },
    {
        _id: userId[2],
        userName: 'Quigg',
        password: 'QuiggWasHere',
        firstName: 'Quentin',
        lastName: 'H',
        email: 'Q@yahoo.com',
    },

]

const pokemonCardData = [
    {
        _id: pokemonCardId[0],
        name: 'Pikachu',
        energy: "Lightning",
        variant: 'None',
        abilityOne: 'Iron Tail',
        abilityOneDescription: 'Flip a coint until you get tails. The attack does 20 damage for each coin flips that results in heads',
        abilityOneDamage: '20x',
        cardNumber: '28',
        rarity: 'Common',
        illustrator: 'Xegeeniro Himeo',
        hp: 60,
        cardSet: cardSetId[85],
        cardValue: 0,
        language: 'English'
    },
    {
        _id: pokemonCardId[1],
        name: 'Grapploct',
        
    }
]

const cardSetData = [
    {
        _id: cardSetId[0],
        name: "Base Set",
        year: 1999,
        totalNumberOfCardsInSet: 102
    },

    {
        _id: cardSetId[1],
        name: "Jungle",
        year: 1999,
        totalNumberOfCardsInSet: 102
    },

    {
        _id: cardSetId[2],
        name: "Fossil",
        year: 1999,
        totalNumberOfCardsInSet: 62
    },

    {
        _id: cardSetId[3],
        name: "Base Set 2",
        year: 2000,
        totalNumberOfCardsInSet: 130
    },

    {
        _id: cardSetId[4],
        name: "Team Rocket",
        year: 2000,
        totalNumberOfCardsInSet: 83
    },

    {
        _id: cardSetId[5],
        name: "Gym Heros",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        _id: cardSetId[6],
        name: "Gym Challenge",
        year: 2000,
        totalNumberOfCardsInSet: 132
    },

    {
        _id: cardSetId[7],
        name: "Neo Genesis",
        year: 2000,
        totalNumberOfCardsInSet: 111
    },

    {
        _id: cardSetId[8],
        name: "Neo Discovery",
        year: 2001,
        totalNumberOfCardsInSet: 75
    },

    {
        _id: cardSetId[9],
        name: "Neo Revelation",
        year: 2001,
        totalNumberOfCardsInSet: 83
    },

    {
        _id: cardSetId[10],
        name: "Neo Destiny",
        year: 2002,
        totalNumberOfCardsInSet: 113
    },

    {
        _id: cardSetId[11],
        name: "Legendary Collection",
        year: 2002,
        totalNumberOfCardsInSet: 110
    },

    {
        _id: cardSetId[12],
        name: "Expedition Base Set",
        year: 2002,
        totalNumberOfCardsInSet: 165
    },

    {
        _id: cardSetId[13],   
        name: "Aquapolis",
        year: 2003,
        totalNumberOfCardsInSet: 186
    },

    {
        _id: cardSetId[14],
        name: "Skyridge",
        year: 2003,
        totalNumberOfCardsInSet: 182
    },
    
    {
        _id: cardSetId[15],
        name: "EX Ruby & Sapphire",
        year: 2003,
        totalNumberOfCardsInSet: 109
    },

    {
        _id: cardSetId[16],
        name: "EX Sandstorm",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        _id: cardSetId[17],
        name: "EX Dragon",
        year: 2003,
        totalNumberOfCardsInSet: 100
    },

    {
        _id: cardSetId[18],
        name: "EX Team Magma vs Team Aqua",
        year: 2004,
        totalNumberOfCardsInSet: 97
    },

    {
        _id: cardSetId[19],
        name: "EX Hidden Legends",
        year: 2004,
        totalNumberOfCardsInSet: 102
    },

    {
        _id: cardSetId[20],
        name: "EX FireRed & LeafGreen",
        year: 2004,
        totalNumberOfCardsInSet: 116
    },

    {
        _id: cardSetId[21],
        name: "EX Team Rocket Returns",
        year: 2004,
        totalNumberOfCardsInSet: 111
    },

    {
        _id: cardSetId[22],
        name: "EX Deoxys",
        year: 2005,
        totalNumberOfCardsInSet: 108
    },

    {
        _id: cardSetId[23],
        name: "EX Emerald",
        year: 2005,
        totalNumberOfCardsInSet: 107
    },

    {
        _id: cardSetId[24],
        name: "EX Unseen Forces",
        year: 2005,
        totalNumberOfCardsInSet: 145
    },

    {
        _id: cardSetId[25],
        name: "EX Delta Species",
        year: 2005,
        totalNumberOfCardsInSet: 114
    },

    {
        _id: cardSetId[26],
        name: "EX Legend Maker",
        year: 2005,
        totalNumberOfCardsInSet: 145
    },

    {
        _id: cardSetId[27],
        name: "EX Holon Phantoms",
        year: 2006,
        totalNumberOfCardsInSet: 145
    },

    {
        _id: cardSetId[28],
        name: "EX Crystal Guardians",
        year: 2005,
        totalNumberOfCardsInSet: 100
    },

    {
        _id: cardSetId[29],
        name: "EX Dragon Frontiers",
        year: 2006,
        totalNumberOfCardsInSet: 101
    },

    {
        _id: cardSetId[30],
        name: "EX Power Keepers",
        year: 2007,
        totalNumberOfCardsInSet: 108
    },

    {
        _id: cardSetId[31],
        name: "Diamond & Pearl",
        year: 2007,
        totalNumberOfCardsInSet: 130
    },

    {
        _id: cardSetId[32],
        name: "Mysterious Treasures",
        year: 2007,
        totalNumberOfCardsInSet: 124
    },

    {
        _id: cardSetId[33],
        name: "Secret Wonders",
        year: 2007,
        totalNumberOfCardsInSet: 132
    },

    {
        _id: cardSetId[34],
        name: "Great Encounters",
        year: 2008,
        totalNumberOfCardsInSet: 106
    },
    
    {
        _id: cardSetId[35],
        name: "Majestic Dawn",
        year: 2008,
        totalNumberOfCardsInSet: 100
    },

    {
        _id: cardSetId[36],
        name: "Legends Awakened",
        year: 2008,
        totalNumberOfCardsInSet: 146
    },

    {
        _id: cardSetId[37],
        name: "Stormfront",
        year: 2008,
        totalNumberOfCardsInSet: 106
    },

    {
        _id: cardSetId[38],
        name: "Platinum",
        year: 2009,
        totalNumberOfCardsInSet: 133
    },

    {
        _id: cardSetId[39],
        name: "Rising Rivals",
        year: 2009,
        totalNumberOfCardsInSet: 120
    },

    {
        _id: cardSetId[40],
        name: "Supreme Victors",
        year: 2009,
        totalNumberOfCardsInSet: 153
    },

    {
        _id: cardSetId[41],
        name: "Arceus",
        year: 2009,
        totalNumberOfCardsInSet: 111
    },

    {
        _id: cardSetId[42],
        name: "HeartGold & Soulsilver",
        year: 2010,
        totalNumberOfCardsInSet: 124
    },

    {
        _id: cardSetId[43],
        name: "Unleashed",
        year: 2010,
        totalNumberOfCardsInSet: 96
    },

    {
        _id: cardSetId[44],
        name: "Unduanted",
        year: 2010,
        totalNumberOfCardsInSet: 91
    },

    {
        _id: cardSetId[45],
        name: "Triumphant",
        year: 2010,
        totalNumberOfCardsInSet: 103
    },

    {
        _id: cardSetId[46],
        name: "Call of Legends",
        year: 2011,
        totalNumberOfCardsInSet: 106
    },

    {
        _id: cardSetId[47],
        name: "Black & White",
        year: 2011,
        totalNumberOfCardsInSet: 115
    },

    {
        _id: cardSetId[48],
        name: "Emerging Powers",
        year: 2011,
        totalNumberOfCardsInSet: 98
    },

    {
        _id: cardSetId[49],
        name: "Noble Victories",
        year: 2011,
        totalNumberOfCardsInSet: 102
    },

    {
        _id: cardSetId[50],
        name: "Next Destinies",
        year: 2012,
        totalNumberOfCardsInSet: 103
    },

    {
        _id: cardSetId[51],
        name: "Dark Explorers",
        year: 2012,
        totalNumberOfCardsInSet: 111
    },

    {
        _id: cardSetId[52],
        name: "Dragons Exalted",
        year: 2012,
        totalNumberOfCardsInSet: 128
    },

    {
        _id: cardSetId[53],
        name: "Boundaries Crossed",
        year: 2012,
        totalNumberOfCardsInSet: 153
    },

    {
        _id: cardSetId[54],
        name: "Plasma Storm",
        year: 2013,
        totalNumberOfCardsInSet: 138
    },
    
    {
        _id: cardSetId[55],
        name: "Plasma Freeze",
        year: 2013,
        totalNumberOfCardsInSet: 122
    },

    {
        _id: cardSetId[56],
        name: "Plasma Blast",
        year: 2013,
        totalNumberOfCardsInSet: 105
    },

    {
        _id: cardSetId[57],
        name: "Legendary Treasures",
        year: 2013,
        totalNumberOfCardsInSet: 140
    },

    {
        _id: cardSetId[58],
        name: "XY",
        year: 2014,
        totalNumberOfCardsInSet: 146
    },

    {
        _id: cardSetId[59],
        name: "Flashfire",
        year: 2014,
        totalNumberOfCardsInSet: 109
    },

    {
        _id: cardSetId[60],
        name: "Furious Fists",
        year: 2014,
        totalNumberOfCardsInSet: 113
    },

    {
        _id: cardSetId[61],
        name: "Phantom Forces",
        year: 2014,
        totalNumberOfCardsInSet: 122
    },

    {
        _id: cardSetId[62],
        name: "Primal Clash",
        year: 2015,
        totalNumberOfCardsInSet: 164
    },

    {
        _id: cardSetId[63],
        name: "Roaring Skies",
        year: 2015,
        totalNumberOfCardsInSet: 110
    },

    {
        _id: cardSetId[64],
        name: "Ancient Origins",
        year: 2015,
        totalNumberOfCardsInSet: 100
    },

    {
        _id: cardSetId[65],
        name: "BREAKthrough",
        year: 2015,
        totalNumberOfCardsInSet: 164
    },

    {
        _id: cardSetId[66],
        name: "BREAKpoint",
        year: 2016,
        totalNumberOfCardsInSet: 123
    },

    {
        _id: cardSetId[67],
        name: "Fates Collide",
        year: 2016,
        totalNumberOfCardsInSet: 125
    },

    {
        _id: cardSetId[68],
        name: "Steam Siege",
        year: 2016,
        totalNumberOfCardsInSet: 116
    },

    {
        _id: cardSetId[69],
        name: "Evolutions",
        year: 2016,
        totalNumberOfCardsInSet: 113
    },

    {
        _id: cardSetId[70],
        name: "Sun & Moon",
        year: 2017,
        totalNumberOfCardsInSet: 163
    },

    {
        _id: cardSetId[71],
        name: "Guardians Rising",
        year: 2017,
        totalNumberOfCardsInSet: 169
    },

    {
        _id: cardSetId[72],
        name: "Burning Shadows",
        year: 2017,
        totalNumberOfCardsInSet: 169
    },

    {
        _id: cardSetId[73],
        name: "Crimson Invasion",
        year: 2017,
        totalNumberOfCardsInSet: 124
    },

    {
        _id: cardSetId[74],
        name: "Ultra Prism",
        year: 2003,
        totalNumberOfCardsInSet: 182
    },
    
    {
        _id: cardSetId[75],
        name: "Forbidden Light",
        year: 2018,
        totalNumberOfCardsInSet: 146
    },

    {
        _id: cardSetId[76],
        name: "Celestial Storm",
        year: 2018,
        totalNumberOfCardsInSet: 2018
    },

    {
        _id: cardSetId[77],
        name: "Lost Thunder",
        year: 2018,
        totalNumberOfCardsInSet: 236
    },

    {
        _id: cardSetId[78],
        name: "Team Up",
        year: 2019,
        totalNumberOfCardsInSet: 196
    },

    {
        _id: cardSetId[79],
        name: "Unbroken Bounds",
        year: 2019,
        totalNumberOfCardsInSet: 234
    },

    {
        _id: cardSetId[80],
        name: "Unified Minds",
        year: 2019,
        totalNumberOfCardsInSet: 258
    },

    {
        _id: cardSetId[81],
        name: "Cosmic Eclipse",
        year: 2019,
        totalNumberOfCardsInSet: 271
    },

    {
        _id: cardSetId[82],
        name: "Sword & Shield",
        year: 2020,
        totalNumberOfCardsInSet: 216
    },

    {
        _id: cardSetId[83],
        name: "Rebel Clash",
        year: 2020,
        totalNumberOfCardsInSet: 209
    },

    {
        _id: cardSetId[84],
        name: "Darkness Ablaze",
        year: 2020,
        totalNumberOfCardsInSet: 201
    },

    {
        _id: cardSetId[85],
        name: "Vivid Voltage",
        year: 2020,
        totalNumberOfCardsInSet: 203
    },

    {
        _id: cardSetId[86],
        name: "Battle Styles",
        year: 2021,
        totalNumberOfCardsInSet: 183
    },

    {
        _id: cardSetId[87],
        name: "Chilling Reign",
        year: 2021,
        totalNumberOfCardsInSet: 233
    },

    {
        _id: cardSetId[88],
        name: "Evolving Skies",
        year: 2021,
        totalNumberOfCardsInSet: 237
    },

    {
        _id: cardSetId[89],
        name: "Fusion Strike",
        year: 2021,
        totalNumberOfCardsInSet: 284
    },

    {
        _id: cardSetId[90],
        name: 'Brilliant Stars',
        year: 2022,
        totalNumberOfCardsInSet: 172
    }

]


const seedData = async () => {
    try {
        await User.insertMany(userData)
        console.log('============ USERS SEEDED =============')

       
        await CardSet.insertMany(cardSetData)
        console.log('============ CardSets SEEDED =============')

        
        await PokemonCard.insertMany(pokemonCardData)
        console.log('============ PokemonCards SEEDED =============')

        // await Cart.deleteMany({})
        // await Cart.insertMany()
        // console.log('============ Replies SEEDED =============')
        process.exit(0)
        
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

seedData()

