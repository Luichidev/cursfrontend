/////////FUNCIONES////////////
/*
  Author: @Luichidev
  Web: https://luichi.dev
  Creation_Date: 09/03/2022
  Revision: 11/03/2022
*/

// PROTOTYPE: Void buy(Number id).
// DESCRIPTION: Añade producto al cart por el id

function buy(id) {
  cartList.push(products.find((producto) => producto.id === id))
}

// PROTOTYPE: Void cleanCart().
// DESCRIPTION: Reinicializa el carList

function cleanCart() {
  cartList.length = 0
}

// PROTOTYPE: Void subTotal().
// DESCRIPTION: Calcula el subtotal de cada producto

function subTotal() {
  let cartSub = [],
    sum = []

  for (const ele in subtotal) {
    cartSub[ele] = cartList.filter((pro) => pro.type === ele)
    sum[ele] = sumTokeys(cartSub[ele], 'price')
    subtotal[ele].value = sum[ele]
  }
}

// PROTOTYPE: Array sumTokeys(Array array, String key).
// DESCRIPTION: Devuelve la suma del contenido de la key de un array

function sumTokeys(array, key) {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i][key]
  }
  return total
}

function createSubTotal() {
  const model = {
    value: 0,
    discount: 0,
  }

  products.forEach((producto) => {
    subtotal[producto.type] = model
  })
}
