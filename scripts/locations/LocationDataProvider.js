const locationCollection = [
    {
        name: "Deep Antarctic Ocean",
        fish: "Fish Harvested: Anglerfish",
        temperature: "28° to 50°F",
        image: 'https://i.imgur.com/FT05ZYA.png'
    },
    {
        name: "Honshu, Japan",
        fish: "Fish Harvested: Goblin Shark",
        temperature: "36° to 64°F",
        image: 'https://i.imgur.com/rdAdFay.png'
    },
    {
        name: "Great Barrier Reef",
        fish: "Fish Harvested: Clownfish",
        temperature: "63° to 80°F",
        image: 'https://i.imgur.com/3Irx9mI.png'
    },
    {
        name: "Indian Ocean",
        fish: "Fish Harvested: Pufferfish",
        temperature: "72° to 82°F",
        image: 'https://i.imgur.com/FKBb7mO.png'
    },
    {
        name: "Pacific Ocean",
        fish: "Fish Harvested: Flying Fish",
        temperature: "29° to 43°F°",
        image: 'https://i.imgur.com/EqxSO0S.png'
    },
    {
        name: "Palos Verdes Peninsula",
        fish: "Fish Harvested: Sunfish",
        temperature: "63° to 70°F",
        image: 'https://i.imgur.com/tXzm7dd.png'
    }
]

export const useLocations = () => {
    return locationCollection.slice()
}