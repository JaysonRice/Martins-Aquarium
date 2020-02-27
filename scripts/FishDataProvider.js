const fishCollection = [
    {   
        name: "Lightbulb",
        length: "2 ft",
        species: "anglerfish",
        food: "crustaceans",
        location: "Marianas Trench"
    },
    {
        name: "Snuffles",
        length: "4 ft",
        species: "goblin shark",
        food: "small fish",
        location: "Pacific Ocean"
    },
    {
        name: "Mr. Blubb",
        length: "3 in",
        species: "clownfish",
        food: "algae",
        location: "Great Barrier Reef"
    },
    {
        name: "Pouty",
        length: "1 ft",
        species: "pufferfish",
        food: "algae",
        location: "Indian Ocean"
    },
    {
        name: "Flapjack",
        length: "1 ft",
        species: "flying fish",
        food: "plankton",
        location: "Pacific Ocean"
    },
    {
        name: "Sonny",
        length: "4 ft",
        species: "sunfish",
        food: ["squid", "jellyfish"],
        location: "Madagascar Tropics"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}