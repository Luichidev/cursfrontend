/**
 * Exercici 3, Event al formulari: input
 * a) Afegeix un event perquè ens mostri un alert cada vegada que escrivim una lletra al buscador
 * b) Afegeix un event perquè ens mostri un alert cada vegada que escrivim la lletra a al buscador
 * c) El mateix que l'exercici 2, però ara fes servir una funció.
 */

const buscador = document.querySelector('form#formulario > .busqueda')

buscador.addEventListener('keypress', (e) => {
  console.log(e.target.value)
})
