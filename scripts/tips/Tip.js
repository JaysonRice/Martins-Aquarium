const Tip = (tip) => {
    return `
    <h3 class="tipTitle">${tip.tipTitle}</h3>
    <p class="tip">${tip.tips.join("<br> <br>")}</p> `
}

export default Tip

