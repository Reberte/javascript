
var marcas = [{marca: 'Ford', modelo: 'Focus'},
              {marca: 'BMW', modelo: 'BMW Z4'},
              {marca: 'Fiat', modelo: 'Palio'},
              {marca: 'Audi', modelo: 'A3'}];
marcas.forEach((elemento) => {
      console.log("Marca: " + elemento.marca + " - modelo: " + elemento.modelo);
})
/* saída:
Marca: Ford - modelo: Focus
Marca: BMW - modelo: BMW Z4
Marca: Fiat - modelo: Palio
Marca: Audi - modelo: A3
*/