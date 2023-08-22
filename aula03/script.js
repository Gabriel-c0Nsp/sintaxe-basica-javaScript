// Array e Objects

// como declarar um array:

let array = ['String', 1, true];
console.log(array);

// array em JavaScript pode armazenar vários tipos de dados!

console.log(array[1]);

// for eache

// array.forEach(function(item, index) {
//   console.log(item, index);
// })


// push

// array.push('novo item');
// console.log(array);


// pop

// array.pop();
// console.log(array);


// shift

// array.shift();
// console.log(array)


// unshift

// array.unshift("novo intem no início")
// console.log(array)


//indexOf

// console.log(array.indexOf(true))


// splice

// array.splice(0, 3)
// console.log(array)


// slice

// let novoArray = array.slice(0, 2);
// console.log(novoArray)


// OBJECT:

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno: 'objeto interno'}};

console.log(object)

// como acessar apenas uma propriedade
console.log(object.boolean)

var string = object.string
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)
