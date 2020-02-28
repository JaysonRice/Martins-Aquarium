const fishCollection = [
    {   
        name: "Lightbulb",
        image: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/fish/group/anglerfish_thumb.jpg',
        length: "2 ft",
        species: "Anglerfish",
        food: ["Crustaceans, squids, snails"],
        location: "Deep Antarctic Ocean"
    },
    {
        name: "Snuffles",
        image:'https://itsnature.org/wp-content/uploads/2008/02/070209-goblin-shark_big.jpg',
        length: "4 ft",
        species: "Goblin shark",
        food: ["Small fish, rays, squid"],
        location: "Honshu, Japan"
    },
    {
        name: "Blubb",
        image: 'https://m.liveaquaria.com/images/categories/large/lg_107557_ORA_Stubby_Ocellaris_Clownfish.jpg',
        length: "3 in",
        species: "Clownfish",
        food: ["Algae, zooplankton"],
        location: "Great Barrier Reef"
    },
    {
        name: "Pouty",
        image: 'https://thumbs-prod.si-cdn.com/2tSlDBd2Jh97_c7vNsn58HAhkkY=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/d6/93/d6939718-4e41-44a8-a8f3-d13648d2bcd0/c3npbx.jpg',
        length: "1 ft",
        species: "Pufferfish",
        food: ["Invertebrates, algae"],
        location: "Indian Ocean"
    },
    {
        name: "Flapjack",
        image: 'https://vignette.wikia.nocookie.net/wildkratts/images/7/72/Atlantic_Flying_Fish_RL.PNG/revision/latest?cb=20191021143355',
        length: "1 ft",
        species: "Flying fish",
        food: ["Plankton, crustaceans "],
        location: "Pacific Ocean"
    },
    {
        name: "Sonny",
        image: 'https://thumbs-prod.si-cdn.com/79xDamFZC8yUv7WeBtXgSzUXe0w=/fit-in/1600x0/https://public-media.si-cdn.com/filer/94/c1/94c102c0-1929-4ff6-b6ff-fd5d5ae036ae/42-25125374.jpg',
        length: "4 ft",
        species: "Sunfish",
        food: ["Squid", "jellyfish"],
        location: "Palos Verdes Peninsula"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}