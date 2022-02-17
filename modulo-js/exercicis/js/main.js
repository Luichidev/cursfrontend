const $ = (ele) => document.querySelector(ele)
const css = (ele, color, size, align) => {
  $(ele).style.color = color
  $(ele).style.fontSize = size
  $(ele).style.textAlign = align
}

css('h1', '#196deb', '3rem', 'center')
css('h2', '#c3c3c3', '3rem', 'center')
css('p', 'grey', '0.8rem', 'center')

//---------------VARIABLES---------------//
// Number
let n = 123
n = 12.345

// Strings
let str = 'Hola'

// Boolean
let isGreater = 4 > 1
console.log(isGreater) //True (el resultado de la comparación es "sí")
// “null” Es sólo un valor especial que representa “nada”, “vacío” o “valor desconocido”.
let age = null

// “undefined”
// El significado de undefined es “valor no asignado”. Si una variable es declarada pero no asignada, entonces su valor es undefined:
age
console.log(age) // muestra "undefined" Nota: Per saber el tipus de variable fem servir typeof typeof age // "number" typeof isGreater // boolean

// Els següents valors no s’entenen com Tipus de dades, però els podem obtenir en el nostres programes:
// NaN
// Cuando intentamos realizar operaciones que no pueden llevarse a cabo
var n1 = 'Texto'
var n2 = 3
var result = n1 * n2
console.log('El resultado es: ' + result) //En el código anterior recibimos el valor NaN debido a que intentamos multiplicar un valor en texto con un valor numérico.

// Nota: Per validar si una variable es NAN fem servir:
isNaN()

// Infinity
// Obtendremos un valor Infinity en JavaScript cuando se excede el límite superior (+) o inferior (-) de coma flotante que son: 1.797693134862315E+308. y -1.797693134862315E+308.
console.log(typeof Infinity)
console.log(1.7976931348923157e10309)
