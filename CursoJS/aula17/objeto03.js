const o1 = Object.freeze({name:'marcos', age: 13})
// const seguifica que o1 vai estar alocado sem na mesma referencia de memoria, mas o seu conteúdo pode ser modificado
// para que o contedudo não seja modificado usado o Object.freeze, assim nenhuma informação será modificada.

// evoluindo o dado

const o2 = Object.freeze({ ...o1, name: 'maria'})// ...referenciando o objeto o1

const o3 = {...o1, name:'joão', age: 30}

console.log(o1.name, o2.name, o3.name)

o1.name = 'x'
o2.name = 'x'
o3.name = 'x'
console.log(o1.name, o2.name, o3.name)