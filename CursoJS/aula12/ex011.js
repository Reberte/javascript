// Desenvolver um programa que analisa se uma pessoa pode vota ou não e se o vota é o opcional ou obrigatorio.

var idade = 67
console.log(`Sua idade é ${idade}`)
if (idade < 16){
  console.log('Não Vota')
} else if (idade < 18 || idade > 66) {
  console.log('Voto Opcional')
} else {
  console.log('Voto Obrigatorio')
}