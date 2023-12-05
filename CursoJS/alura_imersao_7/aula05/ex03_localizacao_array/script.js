// Exemplos
// Encontrar um objeto em um array por uma de suas propriedades
// JS
// Copy to Clipboard

const inventory1 = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cerejas", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cerejas";
}









// //console.log(inventory.find(isCherries));
// // { name: 'cerejas', quantity: 5 }
// Utilizando arrow function
// JS
// Copy to Clipboard

const inventory2 = [
  { name: "maças", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory2.find((fruit) => fruit.name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }







// Encontrar um número primo em um array
// O exemplo a seguir encontra um elemento dentro da array que é número primo (ou retorna undefined se não houverem números primos).

// JS
// Copy to Clipboard

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5







// Polyfill
// Este método foi adicionado à especificação do ECMAScript 2015 e pode não estar disponível em todas as implementações do JavaScript. Entretanto, você pode fazer um polyfill para o Array.prototype.find com o trecho de código abaixo:

// JS
// Copy to Clipboard

if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this === null) {
      throw new TypeError("Array.prototype.find called on null or undefined");
    }
    if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}