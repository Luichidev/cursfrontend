/*
Exercici 6: delegation
Com hem vist, la següent variable recull información de la primera card
const cardDiv = document.querySelector('.card');
Dins de la card tenim:

Captura l’event click, per cada una de les classes: categoria concierto, titulo, precio. Fe servir les delegacions, per controlar els events
*/

const cardDiv2 = document.querySelectorAll('.card')[1]

cardDiv2.addEventListener('click', (e) => {
  let element = e.target.className
  switch (element) {
    case 'categoria concierto':
      console.log('Categoria concierto')
      e.stopPropagation()
      break
    case 'titulo':
      console.log('Titulo')
      e.stopPropagation()
      break
    case 'precio':
      console.log('Precio')
      e.stopPropagation()
      break
  }
})
