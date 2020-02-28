import { useLocations } from './LocationDataProvider.js';
import Location from './Location.js';

const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const locationElement = document.querySelector(".listOfLocations")
    const locations = useLocations()

    // Generate all of the HTML for all of the fish
    let locationHTMLRepresentations = ""
    for (const locationObjects of locations) {
        locationHTMLRepresentations += Location(locationObjects)
    }

        // Add a section, and all of the fish to the DOM
        locationElement.innerHTML = `
        ${locationHTMLRepresentations}
`   
}

export default LocationList