import { useTips } from './TipDataProvider.js';
import Tip from './Tip.js';

const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const tipElement = document.querySelector(".allTips")
    const tips = useTips()

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const tipObjects of tips) {
        tipHTMLRepresentations += Tip(tipObjects)
    }

        // Add a section, and all of the fish to the DOM
        tipElement.innerHTML = `
        ${tipHTMLRepresentations}
`   
}

export default TipList