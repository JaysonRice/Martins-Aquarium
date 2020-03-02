const Location = (location) => {
    return `
    <section class="locationItem">
    <div class="location__details">

    <p class="location__name">${location.name}</p>
            <button id="button--${location.name.replace(/ /g, "-")}" class="dialog--button--locations">Details</button>

            <dialog class="dialog--location" id="details--${location.name.replace(/ /g, "-")}">
                <div class="dialog--text">Fish Harvested: ${location.fish}</div>
                <div class="dialog--text">Water Temperature: ${location.temperature}</div> 
                <div class="dialog--text">GPS Coordinates: ${location.gps}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
    </div>
            <img class="location__image" src="${location.image}" alt="">
         </section> 
`
}

export default Location
