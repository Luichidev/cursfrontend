const card1 = document.querySelector('#card1')
const cardId = card1.getAttribute('data-id')

//Mode: Static
card1.addEventListener('click', (e) => {
  if (e.target.className.includes('cardAdd')) {
    addToCart(cardId)
  } else if (e.target.className.includes('cardRemove')) {
    removeFromCart(cardId)
  }
})

function addToCart(cardId) {
  const { name } = products.find(({ id }) => id === +cardId)
  alert('add to cart => ' + name)
}

function removeFromCart(cardId) {
  const { name } = products.find(({ id }) => id === +cardId)
  alert('remove to cart => ' + name)
}
