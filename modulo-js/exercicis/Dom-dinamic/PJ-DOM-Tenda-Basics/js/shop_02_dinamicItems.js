document.addEventListener('DOMContentLoaded', (e) => {
  fillCards()
})

let count = 0
const cards = document.querySelectorAll('.cardProduct')

cards.forEach((ele) => {
  let id = ele.getAttribute('data-id')
  ele.addEventListener('click', (e) => {
    if (
      e.target.className.includes('cardAdd') ||
      e.target.className.includes('fa-cart-plus')
    ) {
      count++
      addToCart(id)
      count > 0 ? (notify.innerHTML = count) : false
    }
    if (
      e.target.className.includes('cardRemove') ||
      e.target.className.includes('cardRemove')
    ) {
      count--
      removeFromCart(id)
      count > 0 ? (notify.innerHTML = count) : (notify.innerHTML = 0)
    }
  })
})

function addToCart(cardId) {
  const { name } = products.find(({ id }) => id === +cardId)
  alert('add to cart => ' + name)
}

function removeFromCart(cardId) {
  const { name } = products.find(({ id }) => id === +cardId)
  alert('remove to cart => ' + name)
}

function fillCards() {
  products.forEach((ele) => {
    const card = document.querySelector('#card' + ele.id)
    card.querySelector('.card img').setAttribute('src', ele.img)
    card.querySelector('.card-body a').textContent = ele.name
    card.querySelector('.card-body p').textContent = ele.price + ' €'
    card.querySelector('.card-body ul li i').textContent = `- ${ele.type} -`
  })
}
