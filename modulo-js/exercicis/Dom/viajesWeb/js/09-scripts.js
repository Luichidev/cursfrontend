console.log('Exercises 08: CREAR UNA NOVA CARD')
//Contenidor
const cardContainer = document.querySelector('.contenedor-cards')

// Creem els elements
const fatherDiv = document.createElement('div')
const fillImg = document.createElement('img')
const fillDiv = document.createElement('div')
const fillp1 = document.createElement('p')
const fillp2 = document.createElement('p')
const fillp3 = document.createElement('p')

//Emplenem els class dels elements
fatherDiv.className = 'card'
fillDiv.className = 'info'
fillp1.className = 'categoria concierto'
fillp2.className = 'titulo'
fillp3.className = 'precio'

//Emplenem els contingut dels elements
fillImg.src = 'img/hacer2.jpg'
fillp1.innerHTML = 'concierto'
fillp2.innerHTML = 'Concierto de Rock'
fillp3.innerHTML = '$800 por persona'

//Afegir els nodos
// div info
fillDiv.appendChild(fillp1)
fillDiv.appendChild(fillp2)
fillDiv.appendChild(fillp3)

//div card
fatherDiv.appendChild(fillImg)
fatherDiv.appendChild(fillDiv)

//Afegir el nou nodo card al contenidor
cardContainer.appendChild(fatherDiv)
