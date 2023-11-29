//var numeroSecreto = 10;
var jogar = prompt('Quer Jogar? (s/n)');

if(jogar == 's' || jogar == 'S'){
  var qtdjogamax = Number(prompt('Informe a quantidade máxima de erro permitida para encontrar o número correto.'))
  

  var numeroSecreto = parseInt(Math.random()*1001);
  console.log(numeroSecreto)
  var qtdchute = 0;

  while (chute != numeroSecreto && qtdchute != qtdjogamax){
    
    
  var chute = prompt('digite um número entre 1 e 1000');

    if(chute == 0 || chute > 1000 || chute == ''){
      while(chute == 0 || chute > 1000 || chute == ''){
      var chute = prompt(`[Número inválido ${chute}] - digite um número entre 1 e 1000`);
      }
    }
     if (chute == numeroSecreto) {
      alert(`Acertou mizeravel! o número é ${numeroSecreto}`)
  } else if (chute > numeroSecreto) {
        alert(`Errou! O número secreto é menor que ${chute}`);
        
      } else {
        alert(`Errou! O número secreto é maior que ${chute}`);
      }
      if(qtdjogamax == qtdchute){
        alert(`FIM DE JOGO! O número máximo de tentativas foi atingido ${qtdjogamax}`);
      }
    

    qtdchute += 1;
    alert(`Essa é a sua ${qtdchute}ª tentiva!`)  
    if(qtdjogamax == qtdchute){
      alert(`FIM DE JOGO! O número máximo de '${qtdjogamax}' tentativas foi atingido`);
    }
      
  }
}