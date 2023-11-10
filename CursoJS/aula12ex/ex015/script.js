function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados digitados e tente novamente')
  } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      res.innerHTML = `Idade calculado: ${idade}`
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id','foto')
      console.log(fsex[0].checked)
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade < 10) {
          //Criança
          console.log('Passei por aqui')
          img.setAttribute('src','perfil_crianca_m.png')
        } else if (idade <= 21) {
          // Jovem
          img.setAttribute('src','perfil_jovem_m.png')
        } else if (idade <= 50) {
          // Adulto
          img.setAttribute('src','perfil_adulto_m.png')
        } else {
          // Idoso
          img.setAttribute('src','perfil_idoso_m.png')
        }
      } else if (fsex[1].checked) {
          genero = 'Mulher'
          if (idade < 10) {
            //Criança
            console.log('Passei por aqui 123456')
            img.setAttribute('src','perfil_crianca_f.png')
          } else if (idade <= 21) {
            // Jovem
            img.setAttribute('src','perfil_jovem_f.png')
          } else if (idade <= 50) {
            // Adulto
            img.setAttribute('src','perfil_adulto_f.png')
          } else {
            // Idoso
            img.setAttribute('src','perfil_idosa_f.png')
          }         
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
  }

}