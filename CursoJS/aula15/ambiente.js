let num = [4,5,6,7,8]// declarando um array ou vetor
num.sort()//ordenando de forma crescente
num.push(1)// incluindo no valor no vetor // ele verifica o tamanho do vetor e cria mais uma posição e inclui a nova informação na ultima posição
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)// indexOf procura se existe o valor informado no vetot, se existir ele retorna o index da posição dele no vetor, se não existir ou não encontrar ele retorna -1

if(pos == -1 ){
  console.log(`Valor ${pos} não encontrado no vetor`)
} else {
console.log(`O valor 8 está na posição ${pos}`)
  }