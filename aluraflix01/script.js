// listaFilmes[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSYhDueag5ZUzFhEZc64recIXfvzxZOzcBiDROwW_nGYM4femeqQyWAuyW3UAsqTL6RY&usqp=CAU"
// listaFilmes[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOfC9ykFCNPOnuS0aVWQH1nh0Fv4_R7yQUj-BLO_M94mchOjs0Zvl-TAlRTG9S_s_yGk&usqp=CAU"
// listaFilmes[2] = "https://br.web.img3.acsta.net/pictures/16/02/11/19/08/291258.jpg"
// listaFilmes[3] = "https://mediamanager.com.br/wp-content/uploads/2023/02/Os-10-melhores-filmes-sobre-tecnologia-do-seculo-XXI-1.jpg"
// listaFilmes[4] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4EEL73y7KMZ5EpBfiIA6blChWOwE-i-lekn7QMcAb0SrSzHb9yxEZq04SDGt8hmuDx4&usqp=CAU"


var listaFilmes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSYhDueag5ZUzFhEZc64recIXfvzxZOzcBiDROwW_nGYM4femeqQyWAuyW3UAsqTL6RY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiOfC9ykFCNPOnuS0aVWQH1nh0Fv4_R7yQUj-BLO_M94mchOjs0Zvl-TAlRTG9S_s_yGk&usqp=CAU",
  "https://br.web.img3.acsta.net/pictures/16/02/11/19/08/291258.jpg",
  "https://mediamanager.com.br/wp-content/uploads/2023/02/Os-10-melhores-filmes-sobre-tecnologia-do-seculo-XXI-1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj4EEL73y7KMZ5EpBfiIA6blChWOwE-i-lekn7QMcAb0SrSzHb9yxEZq04SDGt8hmuDx4&usqp=CAU",
]

// for (var i = 0; i < 5; i++) {
  for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}
