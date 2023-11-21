let valor = document.querySelector('input#fnum')
let tab = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let banco = []

function incluir() {
  
  console.log('Entrei na Função incluir')

  if (valor.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else if (valor.value < 1 || valor.value > 100){
    window.alert(`O Valor ${valor.value} digitado é invalido, digite um valor entre 1 a 100`)
  } else if (banco.indexOf(valor.value) !== -1 ) {
        window.alert(`O valor ${valor.value} já está cadastrado!`)
      } else {
        let item = document.createElement('option')
        item.text = `Valor ${valor.value} adicionado.`
        item.value = `${valor.value}`
        banco.push(valor.value)
        console.log(banco)
        tab.appendChild(item)
      }
   
}

function finalizar() {
  // console.log(banco)
  // console.log(`Total Cadastro: ${totcad()}`)
  // console.log(`Maior Valor ${maiorval()}`)
  // console.log(`Menor Valor ${menorval()}`)
  // console.log(`Soma de todos os Valores ${soma()}`)
  // console.log(`Media dos valores digitiados ${media()}`)

  res.innerHTML= `<p>Ao todo, temos ${totcad()} numeros cadastrados</p>
  <p>O maior valor informado foi ${maiorval()}.</p>
  <p>O menor valor informado foi ${menorval()}.</p>
  <p>Somando todos os valores, temos ${soma()}.</p>
  <p>A média dos valores digitados é ${media()}.</p>`


  //FUNCAO TOTAL CADASTRADO
  function totcad(){
    return banco.length
  }

  //FUNCAO MAIOR VALOR
  function maiorval(){
    let maior = banco[0] 
    for(let pos in banco){
      console.log(`Maior ${maior} é maior que ${banco[pos]} index ${pos}`)

      if (maior < banco[pos]){
        maior = banco[pos]
      }
    }
    return maior
  }

  //FUNCAO MENOR VALOR 
  function menorval(){
    let menor = banco[0] 
    for(let pos in banco){
      // console.log(`Maior ${menor} é menor que ${banco[pos]} index ${pos}`)

      if (menor > banco[pos]){
        menor = banco[pos]
      }
    }
    return menor
  }

  function soma(){
    let tot = 0
    for(let pos in banco){
      tot += Number(banco[pos])
      // console.log(`Tot ${tot}`)
      // console.log(`Banco[pos] ${banco[pos]} pos${pos}`)
    }

    return tot
  }

  function media(){
    let qtd = Number(totcad())
    let totsoma = Number(soma())
    return totsoma/qtd
  }



}
/*

Ao todo, temos x numeros cadastrados.
O maior valor informado foi x.
O menor valor informado foi x.
Somando todos os valores, temosx.
A média dos valores digitadosé x.

*/

/*
9:25
function tabuada(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if(num.value.length == 0){
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    let c = 0
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}


*/