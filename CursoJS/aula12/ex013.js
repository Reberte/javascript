// Pegar os dias da Semana e montar a estrutura switch para retornar o nome do dia que retornar 
var agora = new Date()
var diaSem = agora.getDay()

/*
0 = domingo
1 = segunda-feira
2 = terça-feira
3 = quarta-feira
4 = quinta-feira
5 = sexta-feira
6 = sábado
*/

switch (diaSem){
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda-Feira')
    break
  case 2:
    console.log('Terça-Feira')
    break
  case 3:
    console.log('Quarta-Feira')
    break
  case 4:
    console.log('Quinta-Feira')
    break
  case 5:
    console.log('Sexta-Feira')
    break
  case 6:
    console.log('Sábado')
    break
  default:
    console.log('[ERRO] Data invalida')
    break
}