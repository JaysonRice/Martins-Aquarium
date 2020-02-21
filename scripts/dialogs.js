const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show Bart's details when the button is clicked

    document.querySelector("#button--betty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--betty")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--snuffles").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--snuffles")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--mrBlubb").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--mrBlubb")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--pouty").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--pouty")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--flapjack").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--flapjack")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--sonny").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--sonny")
            theDialog.showModal()
        }
    )
}

export default initializeDetailButtonEvents