const Tip = (tip) => {
    return `
    <section class="allTips">
    <h3 class="tipTitle">${tip.tipTitle}</h3>
    <p class="tip">${tip.tips.join(",")}</p>
    </section>
    `
}

export default Tip

