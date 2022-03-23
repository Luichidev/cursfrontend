document.addEventListener('DOMContentLoaded', (e) => {
  drawCards()
})

function drawCards() {
  const cards = document.querySelector('#cards')
  const template = document.querySelector('#template-card').content
  const fragment = document.createDocumentFragment()

  products.forEach((ele) => {
    template.querySelector('.cardProduct').setAttribute('id', 'card' + ele.id)
    template
      .querySelector('.list-unstyled .cardAdd')
      .setAttribute('data-id', ele.id)
    template
      .querySelector('.list-unstyled .cardRemove')
      .setAttribute('data-id', ele.id)
    template.querySelector('.card-body a').textContent = ele.name
    template.querySelector('.card img').setAttribute('src', ele.img)
    template.querySelector('.card-body a').textContent = ele.name
    template.querySelector('.card-body p').textContent = ele.price + ' €'
    template.querySelector('.card-body ul li i').textContent = `- ${ele.type} -`
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
  })
  cards.appendChild(fragment)
}
