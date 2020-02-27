import { useFish } from './FishDataProvider.js'
import Fish from './Fish.js'

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fishObjects of fishes) {
        fishHTMLRepresentations += Fish(fishObjects)
    }

        // Add a section, and all of the fish to the DOM
        contentElement.innerHTML += `
        ${fishHTMLRepresentations}
`   
}

export default FishList