const Tip = (tip) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}"class="dialog--button">Details</button>

            <dialog class="dialog--fish" id="details--${fish.name}">
                <div>Species: ${fish.species}</div>
                <div>Location: ${fish.location}</div>
                <div>Length: ${fish.size}</div> 
                <div>Food: ${fish.food.join(",")}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Tip