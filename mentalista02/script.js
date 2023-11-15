var aleatoryNumber
var playerChoice
var attempts = 0
var gameStarted = false // Adicionando uma variável para controlar se o jogo foi iniciado

function numberPlayer() {
  if (!gameStarted) {
    alert("Por favor, inicie o jogo primeiro.")
    return
  }

  playerChoice = document.getElementById("playerChoice").value

  // Use Number.isNaN() para verificar se é NaN
  if (
    Number.isNaN(parseInt(playerChoice)) ||
    playerChoice < 1 ||
    playerChoice > 1000
  ) {
    alert("Por favor, insira um número válido entre 1 e 1000.")
    return
  }

  playerChoice = parseInt(playerChoice)
  checkNumber()
}

function checkNumber() {
  attempts++

  if (playerChoice > aleatoryNumber) {
    var infoDiv = document.getElementById("infoGame")
    infoDiv.innerHTML = "<h5>Você errou, o número secreto é menor.</h5><br>"
    infoDiv.innerHTML += attempts + "<p>  tentativas(s)</p>"
  } else if (playerChoice < aleatoryNumber) {
    var infoDiv = document.getElementById("infoGame")
    infoDiv.innerHTML = "<h5>Você errou, o número secreto é maior.</h5><br>"
    infoDiv.innerHTML += attempts + "<p>  tentativas(s)</p>"
  } else {
    var infoDiv = document.getElementById("infoGame")
    infoDiv.innerHTML =
      "<h5>Você acertou! O número secreto é " + aleatoryNumber + "</h5><br>"
    infoDiv.innerHTML += "<p>" + attempts + " tentativa(s)</p>"

    // Desativar o input do jogador após acertar
    document.getElementById("playerChoice").disabled = true

    // Desativar o botão "Continuar" após acertar
    document.getElementById("continueGame").disabled = true
  }
}

function initializeGame() {
  aleatoryNumber = Math.floor(Math.random() * 1001) // Usando Math.floor() para garantir um número inteiro
  gameStarted = true // Atualizando a variável para indicar que o jogo foi iniciado

  document.getElementById("continueGame").disabled = false

  // Limpar o conteúdo da div de informações
  document.getElementById("infoGame").innerHTML =
    "<h3>Jogo iniciado, boa sorte!</h3>"

  // Habilitar o input do jogador ao iniciar um novo jogo
  document.getElementById("playerChoice").disabled = false
}
