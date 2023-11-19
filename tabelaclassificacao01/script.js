var marcelo = {
  nome:'Marcelo', 
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0
}
var Alexandre = {
  nome: "Alexandre",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}
var Souza = {
  nome: "Souza",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}
var Motta = {
  nome: "Motta",
  vitoria: 0,
  empate: 0,
  derrota: 0,
  pontos: 0,
}

var elementoTabela = document.getElementById('tabelaJogadores')

exibirNaTela()

function exibirNaTela() {
elementoTabela.innerHTML = `
<tr>
              <td>${marcelo.nome}</td>
              <td>${marcelo.vitoria}</td>
              <td>${marcelo.empate}</td>
              <td>${marcelo.derrota}</td>
              <td>${marcelo.pontos}</td>
              <td><button onClick="adicionarVitoria(marcelo)">Vitória</button></td>
              <td><button onClick="adicionarEmpate()">Empate</button></td>
              <td><button onClick="adicionarDerrota()">Derrota</button></td>
            </tr>
`
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela()
}
function adicionarEmpate(jogador) {
  jogador.empate++
  jogador.pontos++
  //jogador.pontos = jogador.pontos + 1
  exibirNaTela()
}

function adicionarDerrota(jogador) {}


