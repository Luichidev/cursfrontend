console.log('Exercises 07: ELIMINAR ELEMENTS, REMOVE-CHILD')
const firstLink = document.links[0]
const father = document.querySelector('nav.navegacion')
father.removeChild(firstLink)
