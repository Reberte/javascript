var listaFilmesFavoritos = [];
var listaTrailersFilmesFavoritos = [];

function adicionarFilme(){
  var filmeFavorito = document.getElementById('filme').value;
  var trailerFilmeFavorito = document.getElementById('trailer').value;
  
    if(( filmeFavorito.endsWith('jpg') ) || ( filmeFavorito.endsWith('jpeg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaFilmesFavoritos.push(filmeFavorito);
      listaTrailersFilmesFavoritos.push(trailerFilmeFavorito);
      
      limpaCampos();
      recarregarFilmes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarFilmes(){
 
  var elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = '';
  for(i=0; i < listaFilmesFavoritos.length ; i++){
    elementoListaFilmes.innerHTML += `<a href=" ${listaTrailersFilmesFavoritos[i]} "><img src=" ${listaFilmesFavoritos[i]} "></a>`;
    
  }
}

function limpaCampos(){
   document.getElementById('filme').value = '';
   document.getElementById('trailer').value = '';
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