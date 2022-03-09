/////////FUNCIONES////////////
/*
  Author: @Luichidev
  Web: https://luichi.dev
  Creation_Date: 09/03/2022
  Revision: 09/03/2022
*/

// PROTOTYPE: Void buy(Number id).
// DESCRIPTION: Añade producto al cart por el id

function buy(id) {
  cart.push(products.find((pepito) => pepito.id === id))
}
