//var numeroSecreto = 10;
var jogar = prompt('Quer Jogar? (s/n)');

if(jogar == 's' || jogar == 'S'){

  var numeroSecreto = parseInt(Math.random()*1001);
  console.log(numeroSecreto)
  var qtdchute = 0;

  while (chute != numeroSecreto){
    qtdchute += 1;
    alert(`Essa é a sua ${qtdchute}ª tentiva!`)  
  var chute = prompt('digite um número entre 0 e 1000');


  if (chute == numeroSecreto) {
    alert(`Acertou mizeravel! o número é ${numeroSecreto}`)
  } else if (chute > numeroSecreto) {
        alert(`Errou! O número secreto é menor que ${chute}`);
        
      } else {
        alert(`Errou! O número secreto é maior que ${chute}`);
      }
      
  }
}