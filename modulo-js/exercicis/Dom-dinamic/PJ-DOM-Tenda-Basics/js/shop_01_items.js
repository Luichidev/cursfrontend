const card1 = document.querySelector('#card1')
const cardId = card1.getAttribute('data-id')
let count = 0
//Mode: Static
// card1.addEventListener('click', (e) => {
//   if (e.target.className.includes('cardAdd')) {
//     addToCart(cardId)
//   } else if (e.target.className.includes('cardRemove')) {
//     removeFromCart(cardId)
//   }
// })

//Mode: Dinamic
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
