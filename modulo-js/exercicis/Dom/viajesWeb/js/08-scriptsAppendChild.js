console.log(
  'Exercises 08: CREAR UN NOU LINK EN EL MENÚ DE NAVEGACIÓN PRINCIPAL'
)

const nouLink = document.createElement('a')
nouLink.textContent = 'Nou Vender'
const contenidor = document.querySelector('nav.navegacion')
contenidor.appendChild(nouLink)
