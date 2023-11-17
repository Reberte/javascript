//
function contador(){
var inicio = Number(document.querySelector('input#idinicio').value)
var fim  = Number(document.querySelector('input#idfim').value)
var passo = Number(document.querySelector('input#idpasso').value)
var resp =document.querySelector('div#resp')
var result = ''

// console.log(`inicio ${inicio}`)
// console.log(`fim ${fim}`)
 console.log(`passo ${passo}`)

if (inicio > fim || passo <= 0 || passo > fim)  {
  window.alert('O Inicio não pode ser maior que o fim e o Passo não pode ser zero ou maior que fim')
  resp.innerHTML = `<p>Existe valores invalidos</p>`

} else {

for( var i = inicio; i <= fim; i+= passo){
  result += `${i} &#9758; `
    
}

resp.innerHTML = `<p>Contando:</p> <p> ${result} &#9983</p>`
console.log(`Contando: ${result}`)
}

}