/*
// ********************** //
// 1- Numberos Aleatorios //
// ********************** //

const createRandomNumbers = require( './createRanmdomNumber')

const numbers = createRandomNumbers();

console.log(numbers);

*/

// ********************** //
//   2- Array de Objetos  //
// ********************** //

const getArrayInfo = require( './getArrayInfo')
const array = [
    { id: 1, name: 'Escuadra', price: 323.45},
    { id: 2, name: 'Calculadora', price: 234.56},
    { id: 3, name: 'Globo Terraqueo', price: 45.67},
    { id: 4, name: 'Paleta Pintura', price: 456.78},
    { id: 5, name: 'Reloj', price: 67.89},
    { id: 6, name: 'Agenda', price: 78.90},
];

const data = getArrayInfo(array);
console.log(data);


