/*var filme01 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaA7uq1T8t6zGmK7-3qB8fWCJ83oSNnU_3CQMlQsjH5nZ1jQlDFW5njA-mmx0NmbrPbE&usqp=CAU'
var filme02 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGQmaw7z6wv0XtKRmtIvjTJ1lk2UvlmbHaWskO4Drkp7F3KGLtyTxWNUNtbCog_JiB7k&usqp=CAU'
var filme03 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygOjbnurx7EdFZVxetcgY95Jp23LQXob7xm1AJZjLo8NT0iuJqqrfTiome8IDZbk3yBw&usqp=CAU' 

document.write(`<img src='${filme01}'> </img>`)
document.write(`<img src='${filme02}'> </img>`)
document.write(`<img src='${filme03}'> </img>`)
*/

var listafilmes = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaA7uq1T8t6zGmK7-3qB8fWCJ83oSNnU_3CQMlQsjH5nZ1jQlDFW5njA-mmx0NmbrPbE&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGQmaw7z6wv0XtKRmtIvjTJ1lk2UvlmbHaWskO4Drkp7F3KGLtyTxWNUNtbCog_JiB7k&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygOjbnurx7EdFZVxetcgY95Jp23LQXob7xm1AJZjLo8NT0iuJqqrfTiome8IDZbk3yBw&usqp=CAU']

listafilmes.push('https://m.media-amazon.com/images/I/81RvHmUzCyL._AC_UF894,1000_QL80_.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsLComU_Ocf8PF2YMu5zIJm4y4UudPJdXGeI9Q1mLtgTV27hK9J1-SrASaxDX9PyVH9w&usqp=CAU')
// listafilmes [0] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaA7uq1T8t6zGmK7-3qB8fWCJ83oSNnU_3CQMlQsjH5nZ1jQlDFW5njA-mmx0NmbrPbE&usqp=CAU'
// listafilmes [1] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWGQmaw7z6wv0XtKRmtIvjTJ1lk2UvlmbHaWskO4Drkp7F3KGLtyTxWNUNtbCog_JiB7k&usqp=CAU'
// listafilmes [2] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygOjbnurx7EdFZVxetcgY95Jp23LQXob7xm1AJZjLo8NT0iuJqqrfTiome8IDZbk3yBw&usqp=CAU'

/*document.write(`<img src='${listafilmes [0]}'> </img>`)
document.write(`<img src='${listafilmes [1]}'> </img>`)
document.write(`<img src='${listafilmes [2]}'> </img>`)*/

for(i=0; i < listafilmes.length ;i++){
  document.write(`<img src='${listafilmes [i]}'> </img>`)
  console.log(i)
}