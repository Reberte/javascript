// Desenvolver um programa que da Bom dia, boa tarde ou boa noite;

var agora = new Date()//Pegando os dados de data do sistema 
var hora = agora.getHours()// pegando a hora da data coletada do sistema
var minuto = agora.getMinutes() // pegando os minitos da data
console.log(`Agora são exatamente ${hora}:${minuto} horas.`)
if (hora < 12) {
  console.log('Bom Dia!')
} else if (hora <= 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa Noite!')
}