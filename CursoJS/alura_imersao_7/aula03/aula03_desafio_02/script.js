var listafilmes = ['https://musicart.xboxlive.com/7/b8841000-0000-0000-0000-000000000002/504/image.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/90/32/45/20091581.jpg', 'https://i.ebayimg.com/images/g/-icAAOSw3~diQzM9/s-l500.jpg']

listafilmes.push('https://m.media-amazon.com/images/I/81RvHmUzCyL._AC_UF894,1000_QL80_.jpg','https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg','https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/25/31/20188754.jpg','testefilmecomimagemempng.png')

var listatitulo = ['Interinstelar','Armagedom','Star Wars','Independence Day','Matrix','Loucademia de Polícia','testeimagempng']


document.write('<div class="container_todosFilmes">')
for(i=0; i < listafilmes.length ;i++){
  if(listafilmes[i].endsWith('jpg') || listafilmes[i].endsWith('jpeg')){
  document.write('<div class="container_filme">')
  document.write(`<img src='${listafilmes [i]}'> </img> <p>${listatitulo[i]}</p>`)
  document.write('</div>')
  console.log(i)
  }else{
    console.log('Não tem extensão .jpg e nem .jpeg ' + listafilmes[i] + ' index: ' + i)
  }
}
document.write('</div>')