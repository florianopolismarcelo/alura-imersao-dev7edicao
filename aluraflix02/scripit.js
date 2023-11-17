function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + "<img src=" + filmeFavorito + ">"
  document.getElementById("filme").value = ''
}

//https://mediamanager.com.br/wp-content/uploads/2023/02/Os-10-melhores-filmes-sobre-tecnologia-do-seculo-XXI-1.jpg
