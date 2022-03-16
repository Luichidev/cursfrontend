//Exercise 04
console.log('Exercises 04: QUERYSELECTOR')
console.log('La primera .card', document.querySelector('.card'))
console.log(
  "L'element de la classe info del contenidor premium",
  document.querySelector('.premium > .info')
)
console.log(
  'La segona card de hospedaje',
  document.querySelector('.hospedaje .card:nth-child(2)')
)
console.log('El formulari per id', document.querySelector('form#formulario'))
console.log('El primer menú de navegació <nav>', document.querySelector('nav'))
