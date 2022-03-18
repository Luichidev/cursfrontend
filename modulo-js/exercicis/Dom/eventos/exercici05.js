/*
Exercici 5: Event Bubbling: stopPropagation
Les següents variables recullen información de la primera card 
const cardDiv = document.querySelector('.card'); 
const infoDiv = document.querySelector('.info'); 
const titulo = document.querySelector('.titulo');

Afegeix un eventListener, per tal de que capturi el click de cada un d’ells. I escrigui en consola un missatge corresponent a cada event
Que pasa?, com ho podem evitar?
*/

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const titulo = document.querySelector('.titulo')

cardDiv.addEventListener('click', (e) => {
  console.log('cardDiv')
  e.stopPropagation()
})

infoDiv.addEventListener('click', (e) => {
  console.log('infoDiv')
  e.stopPropagation()
})

titulo.addEventListener('click', (e) => {
  console.log('titulo')
  e.stopPropagation()
})
