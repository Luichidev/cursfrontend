/**
 * Exercici 2, mouseenter, mouseout
 * a) Al entrar al menú de navegació, canviarem el seu estil de backgroundColor= White
 * b) Al sortir del menú de navegació, tornarem a deixar l'estil inicial (backgroundColor= transparent)
 */

const nav = document.querySelector('.navegacion')

nav.addEventListener('mouseenter', (e) => {
  nav.style.backgroundColor = 'white'
})

nav.addEventListener('mouseout', (e) => {
  nav.style.backgroundColor = 'transparent'
})
