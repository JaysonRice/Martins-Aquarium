const Fish = (fish) => {
    return `
        <div class="fish">
            <div>
                <img class="fish__image" src="${fish.image}" alt="">
            </div>
            <div class="fish__name">${fish.name}</div>
            <button id="button--${fish.name}" class="dialog--button">Details</button>

            <dialog class="dialog--fish" id="details--${fish.name}">
                <div class="dialog--text">Species: ${fish.species}</div>
                <div class="dialog--text">Location: ${fish.location}</div>
                <div class="dialog--text">Length: ${fish.length}</div> 
                <div class="dialog--text">Food: ${fish.food.join(", ")}</div>
                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default Fish