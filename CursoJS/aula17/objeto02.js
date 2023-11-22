let conta = {
  nome:'Marcos',
  idade:'36',
  saldo:Number('200'),
  pix(v=0){
    console.log('Opa! Caiu Pix') 
    this.saldo += v
    }
}

console.log(`O cliente ${conta.nome} possui o saldo de ${conta.saldo}`)
conta.pix(200)

console.log(`O cliente ${conta.nome} recebeu um pix e sou saldo foi atualizado para ${conta.saldo}`)

let conta2 = conta

conta2.nome = 'Jose'

console.log(conta2)


