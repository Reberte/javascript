function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme')
  var trailerFilme = document.getElementById('trailer')
  var elementoListaFilmes = document.getElementById('listaFilmes')
  var listaFilmeFavorito = []
  var listaTrailerFilmeFav = []

  if(filmeFavorito.value.endsWith('jpg') || filmeFavorito.value.endsWith('png') || filmeFavorito.value.endsWith('gif')){
    if(trailerFilme.value.length > 10){
      listaFilmeFavorito.push(filmeFavorito.value)
      listaTrailerFilmeFav.push(trailerFilme.value)
      elementoListaFilmes.innerHTML += `<a href='${trailerFilme.value} target="_blank"><img src='${filmeFavorito.value}' ></a>`
    }else{
      alert(`O endereço do trailer informado não é válido`)
    }
  }else{
    alert(`O endereço de imagem informado não é válido`)
  }
  filmeFavorito.value = ''
  trailerFilme.value = ''

}



/*

Imagem Interinstelar - https://musicart.xboxlive.com/7/b8841000-0000-0000-0000-000000000002/504/image.jpg
Trailer Interinstelar - https://www.youtube.com/watch?v=hHBsKHVLAYc&pp=ygUUdHJhaWxlciBpbnRlcmVzdGVsYXI%3D
Nome Interinstelar

|| filmeFavorito.value.endsWith('jpeg') )
var listafilmes = ['https://musicart.xboxlive.com/7/b8841000-0000-0000-0000-000000000002/504/image.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/32/45/20091581.jpg', 'https://i.ebayimg.com/images/g/-icAAOSw3~diQzM9/s-l500.jpg']

listafilmes.push('https://m.media-amazon.com/images/I/81RvHmUzCyL._AC_UF894,1000_QL80_.jpg','https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg','https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/31/20188754.jpg','testefilmecomimagemempng.png')

var listatitulo = ['Interinstelar','Armagedom','Star Wars','Independence Day','Matrix','Loucademia de Polícia','testeimagempng']

*/