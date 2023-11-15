document.addEventListener("DOMContentLoaded", function () {
  // Função para realizar a conversão e criar ou atualizar a div dinamicamente
  function finalValue() {
    // Obter os valores dos campos de entrada
    var dolarValueInput = document.getElementById("dolarValue")
    var insertValueInput = document.getElementById("insertValue")

    // Verificar se os elementos foram encontrados
    if (!dolarValueInput || !insertValueInput) {
      console.error("Elementos não encontrados.")
      return
    }

    var dolarValue = parseFloat(dolarValueInput.value)
    var insertValue = parseFloat(insertValueInput.value)

    // Verificar se os valores são válidos
    if (isNaN(dolarValue) || isNaN(insertValue)) {
      alert("Por favor, insira valores válidos.")
      return
    }

    // Calcular o valor em Real (BRL)
    var realValue = dolarValue * insertValue

    // Verificar se a div de resultado já existe
    var resultDiv = document.getElementById("resultDiv")

    // Se a div existir, atualizar o conteúdo
    if (resultDiv) {
      resultDiv.textContent =
        "Valor convertido em Real (BRL): R$ " + realValue.toFixed(2)
    } else {
      // Se não existir, criar uma nova div dinamicamente com o valor convertido
      resultDiv = document.createElement("div")
      resultDiv.textContent =
        "Valor convertido em Real (BRL): R$ " + realValue.toFixed(2)
      resultDiv.id = "resultDiv"
      resultDiv.className =
        "d-flex justify-content-center mt-5 alert alert-success w-50 mx-auto" // Adicione classes Bootstrap para o estilo

      // Adicionar a div ao corpo do documento
      document.body.appendChild(resultDiv)
    }
  }

  // Adicionar um ouvinte de evento ao botão de conversão
  var convertButton = document.querySelector(".btn-success")
  convertButton.addEventListener("click", finalValue)
})
