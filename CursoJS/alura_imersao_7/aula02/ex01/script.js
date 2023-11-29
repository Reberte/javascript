//var numeroSecreto = 10;
var numeroSecreto = parseInt(Math.random()*1001)

while (chute != numeroSecreto){
var chute = prompt('digite um número entre 0 e 1000');

 if (chute == numeroSecreto) {
   alert('Acertou mizeravel!')
 } else if (chute > numeroSecreto) {
      alert('Errou! O número secreto é menor.')
    } else {
      alert('Errou! O número secreto é maior.')
    }
}