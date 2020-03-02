const fishCollection = [
    {
        name: "Lightbulb",
        image: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/fish/group/anglerfish_thumb.jpg',
        size: 23,
        species: "Anglerfish",
        food: ["Crustaceans, squids, snails"],
        location: "Deep Antarctic Ocean"
    },
    {
        name: "Snuffles",
        image: 'https://itsnature.org/wp-content/uploads/2008/02/070209-goblin-shark_big.jpg',
        size: 38,
        species: "Goblin shark",
        food: ["Small fish, rays, squid"],
        location: "Honshu, Japan"
    },
    {
        name: "Blubb",
        image: 'https://m.liveaquaria.com/images/categories/large/lg_107557_ORA_Stubby_Ocellaris_Clownfish.jpg',
        size: 3,
        species: "Clownfish",
        food: ["Algae, zooplankton"],
        location: "Great Barrier Reef"
    },
    {
        name: "Pouty",
        image: 'https://thumbs-prod.si-cdn.com/2tSlDBd2Jh97_c7vNsn58HAhkkY=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
        size: 5,
        species: "Pufferfish",
        food: ["Invertebrates, algae"],
        location: "Indian Ocean"
    },
    {
        name: "Flapjack",
        image: 'https://vignette.wikia.nocookie.net/wildkratts/images/7/72/Atlantic_Flying_Fish_RL.PNG/revision/latest?cb=20191021143355',
        size: 12,
        species: "Flying fish",
        food: ["Plankton, crustaceans "],
        location: "Pacific Ocean"
    },
    {
        name: "Sonny",
        image: 'https://thumbs-prod.si-cdn.com/79xDamFZC8yUv7WeBtXgSzUXe0w=/fit-in/1600x0/https://public-media.si-cdn.com/filer/94/c1/94c102c0-1929-4ff6-b6ff-fd5d5ae036ae/42-25125374.jpg',
        size: 40,
        species: "Sunfish",
        food: ["Squid", "jellyfish"],
        location: "Palos Verdes Peninsula"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}


export const mostHolyFish = () => {
    let holyFishArray = []

    for (const holyFish of fishCollection) {
        if (holyFish.size % 3 === 0) {
        holyFishArray.push(holyFish)
           
        }
    }
    return holyFishArray
}

export const soldierFish = () => {
    let soldierFishArray = []
    
    for (const soldierFish of fishCollection) {
        if (soldierFish.size % 5 === 0 && nonHolyFish.size % 3 !== 0) {
        soldierFishArray.push(soldierFish)
           
        }
    }
    return soldierFishArray
}


export const nonHolyFish  = () => {
    let nonHolyFishArray = []
    
    for (const nonHolyFish of fishCollection) {
        if (nonHolyFish.size % 5 !== 0 && nonHolyFish.size % 3 !== 0) {
        nonHolyFishArray.push(nonHolyFish)
           
        }
    }
    return nonHolyFishArray
}

