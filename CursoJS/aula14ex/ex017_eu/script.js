
function calcular(){
var inclOpt = document.querySelector('select#tabuada')// Aqui eu vou pegar os atributos do Select para depois poder incluir o elemento option com a tabuada dentro de select
var val = document.querySelector('input#valor')//pegando ps atributos da tag input id valor

if (val.value === ''){
  alert('Preencha o campo valor para gerar a Tabuada')
}else if (inclOpt.length > 0) {
    cleanSelect()
}else {
  
  for(var i = 0; i <= 10; i++){
    var opt = document.createElement('option')
    opt.innerText = `${val.value} X ${i} = ${val.value * i}`  
    inclOpt.appendChild(opt)
}
}

function cleanSelect(){
  console.log('Vou limpar o select')
  for(i = 0; i < inclOpt.length; i++){
    inclOpt.remove(inclOpt.length-1)
    i++
  }
  calcular()// após limpar o Select retorna para a funcção principal
}

}