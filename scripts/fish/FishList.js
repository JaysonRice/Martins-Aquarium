import { useFish, mostHolyFish, soldierFish, nonHolyFish } from './FishDataProvider.js'
import Fish from './Fish.js'

let fishHTMLRepresentations = ""
const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    let fishes = mostHolyFish()

    // Generate all of the HTML for all of the fish
    
    for (const fishObjects of fishes) {
        fishHTMLRepresentations += Fish(fishObjects)
    }

     fishes = soldierFish()

    for (const fishObjects of fishes) {
        fishHTMLRepresentations += Fish(fishObjects)
    }

    fishes = nonHolyFish()

    for (const fishObjects of fishes) {
        fishHTMLRepresentations += Fish(fishObjects)
    }

        // Add a section, and all of the fish to the DOM
        contentElement.innerHTML = `
        ${fishHTMLRepresentations}
`   
}

export default FishList

