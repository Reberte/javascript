// 1. Utilizando o método includes():
// O método includes() retorna um valor booleano indicando se o array contém ou não o elemento especificado. Veja o exemplo abaixo:

const array1 = [1, 2, 3, 4, 5];
const elemento1 = 3;

if (array.includes(elemento1)) {
  console.log("O array contém o elemento.");
} else {
  console.log("O array não contém o elemento.");
}
// 2. Utilizando o método indexOf():
// O método indexOf() retorna o primeiro índice em que o elemento é encontrado no array, ou -1 caso o elemento não esteja presente. Veja o exemplo abaixo:

const array2 = [1, 2, 3, 4, 5];
const elemento2 = 3;

if (array.indexOf(elemento2) !== -1) {
  console.log("O array contém o elemento.");
} else {
  console.log("O array não contém o elemento.");
}

// 3. Utilizando o método forEach():
// O método forEach() executa uma função de callback para cada elemento do array. Ele não retorna nenhum valor, mas pode ser utilizado para verificar a existência de um elemento. Veja o exemplo abaixo:

const array3 = [1, 2, 3, 4, 5];
const elemento3 = 3;
let contemElemento = false;

array3.forEach((item) => {
  if (item === elemento3) {
    contemElemento = true;
  }
});

if (contemElemento) {
  console.log("O array contém o elemento.");
} else {
  console.log("O array não contém o elemento.");
}



