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
elementoTabela.innerHTML = `
<tr>
              <td>${marcelo.nome}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td><button onClick="adicionarVitoria()">Vitória</button></td>
              <td><button onClick="adicionarEmpate()">Empate</button></td>
              <td><button onClick="adicionarDerrota()">Derrota</button></td>
            </tr>
`

function adicionarVitoria() {}
function adicionarEmpate() {}
function adicionarDerrota() {}


