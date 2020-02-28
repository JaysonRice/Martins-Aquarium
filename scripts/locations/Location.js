const Location = (location) => {
    return `
    <section class="locationItem">
    <div class="location__details">
        <p class="location__name">${location.name}</p>
        <p class="location__fish">${location.fish}</p>
        <p class="location__temperature">${location.temperature}</p>
    </div>
    <img class="location__image" src="${location.image}" alt="">
</section> 
`
}

export default Location


