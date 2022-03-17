console.log('Exercises 07: ELIMINAR ELEMENTS, REMOVE-CHILD')
console.log(
  'a) Eliminem el primer Link que troba ... en aquest cas la opció de menú Vender'
)
const firstLink = document.links[0]
const fatherNav = document.querySelector('.navegacion')
console.log(fatherNav.removeChild(firstLink))

console.log(
  'b) Accedir a la class="navegacion" y eliminem la opció de menú Registro´. Eliminem a partir del pare.'
)

let hijo = document.querySelector('.navegacion a:nth-child(2)')
console.log(fatherNav.removeChild(hijo))
