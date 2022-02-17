// exericici 01
// 1.-
let numberOne = 30
let numberTwo = 11
let suma = numberOne + numberTwo

console.log('la suma de ' + numberOne + ' y ' + numberTwo + ' es ' + suma)

// 2.-1.71
let msg1 = "I'm = I am"
let msg2 = "You're = You are"
// window.alert(msg1 + '\n' + msg2)

// 3.-
// let one = +prompt('inserta un Número')56
// console.log(isNaN(one) ? 'no es número' : 'Si es número')

//4.-
// let numero1 = +prompt('inserta un Número')
// let numero2 = +prompt('inserta otro Número')
// if (numero1 === numero2) {
//   console.log('son iguales')
// } else if (numero1 > numero2) {
//   console.log(`El ${numero1} es mayor`)
// } else {
//   console.log(`El ${numero2} es mayor`)
// }

// 5.-
// let numero = +prompt('inserta un Número')
// console.log(numero % 2 === 0 ? 'es par' : 'es impar')

// 6.-
let altura = +prompt('Dime tu altura?')
let peso = +prompt('Dime tu peso?')
let imc = peso / (altura ^ 2)
console.log('Tu indice de masa corporal es ' + imc.toFixed(2))

// 7.-
let marca = 'total' + (16 + 4)
console.log(marca)
