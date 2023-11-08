function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minuto = data.getMinutes()
  msg.innerHTML = `Agora são ${hora}:${minuto}.`

  if (hora < 12) {
    msg.innerHTML = `Bom Dia! ` + msg.innerHTML
    img.src = 'manha_p.png'
    document.body.style.background = '#468eec'
  }else if (hora <= 18) {
    msg.innerHTML = `Boa Tarde!` + msg.innerHTML
    img.src = 'tarde_p.png'
    document.body.style.background = '#e7b324'
  } else {
    msg.innerHTML = `Boa Noite!` + msg.innerHTML
    img.src = 'noite_p.png'
    document.body.style.background = '#7e7d7d'
  }
}