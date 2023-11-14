function converterMoeda() {
  const dolarInput = document.getElementById("dolar")
  const resultadoDolarInput = document.getElementById("resultado-dolar")
  const taxaDeCambio = 4.91
  const valorEmDolar = parseFloat(dolarInput.value)
  const valorEmReais = valorEmDolar * taxaDeCambio
  resultadoDolarInput.value = valorEmReais.toFixed(2)
}

function converterBitcoin() {
  const bitcoinInput = document.getElementById("bitcoin")
  const resultadoBitcoinInput = document.getElementById("resultado-bitcoin")
  const taxaDeCambioBitcoin = 178948.48
  const valorEmBitcoin = parseFloat(bitcoinInput.value)
  const valorEmReais = valorEmBitcoin * taxaDeCambioBitcoin
  resultadoBitcoinInput.value = valorEmReais.toFixed(2)
}

function converterAnoLuz() {
  const anoLuzInput = document.getElementById("anoluz")
  const resultadoAnoLuzInput = document.getElementById("resultado-anoluz")
  const taxaConversao = 9.461e12
  const valorEmAnoLuz = parseFloat(anoLuzInput.value)
  const valorEmKM = valorEmAnoLuz * taxaConversao
  resultadoAnoLuzInput.value = valorEmKM.toFixed(2)
}

function resetValores() {
  document.getElementById("dolar").value = ""
  document.getElementById("resultado-dolar").value = ""
  document.getElementById("bitcoin").value = ""
  document.getElementById("resultado-bitcoin").value = ""
  document.getElementById("anoluz").value = ""
  document.getElementById("resultado-anoluz").value = ""
}

var nome = prompt("Por favor, me diga, seu nome:")

if (nome !== null && nome !== "") {
  alert(
    "Seja bem vindo, " +
      nome +
      "! Você conseguirá converter o valor do dólar, bitcoin ou ano-luz!"
  )
} else {
  alert("Você não inseriu um nome válido.")
}
