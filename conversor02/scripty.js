const priceDollar = 4.91
const priceEuro = 5.25
const priceBitcoin = 178.442

/*Dollar Conversion*/
document
  .querySelector("#dollar-btn")
  .addEventListener("click", function dollarCalc(event) {
    event.preventDefault()

    const dollarInserted = document.querySelector("#dollar-value").value

    const dollarConverted = priceDollar * dollarInserted

    document.querySelector("#dollar-conversion").textContent =
      dollarConverted.toFixed(2)
  })

/*Euro Conversion*/
document
  .querySelector("#euro-btn")
  .addEventListener("click", function euroCalc(event) {
    event.preventDefault()

    const euroInserted = document.querySelector("#euro-value").value

    const euroConverted = priceEuro * euroInserted

    document.querySelector("#euro-conversion").textContent =
      euroConverted.toFixed(2)
  })

/*Bitcoin em Real*/
document
  .querySelector("#bitcoin-btn")
  .addEventListener("click", function bitcoinCalc(event) {
    event.preventDefault()

    const bitcoinInserted = document.querySelector("#bitcoin-value").value

    const bitcoinConverted = priceBitcoin * bitcoinInserted

    document.querySelector("#bitcoin-conversion").textContent =
      bitcoinConverted.toFixed(2)
  })
