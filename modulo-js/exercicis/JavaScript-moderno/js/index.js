/////////FUNCIONES////////////
/*
      Author: @Luichidev
      Web: https://luichi.dev
      Creation_Date: 10/03/2022
      Revision: 14/03/2022
    */

// PROTOTYPE: Float averageToKey(Array array, String key).
// DESCRIPTION: Devuelve el promedio del contenido de la key de un array
const averageToKey = (array, key) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i][key]
  }
  return (total / array.length).toFixed(2)
}

// PROTOTYPE: Array sortBy(Array array, String direction).
// DESCRIPTION: Recibe como parametro un array y los ordena por el tipo
//             y por la direction pasados por parametros
const sortBy = (array, type, direction = 'asc') => {
  if (direction.toLowerCase() === 'desc') {
    return array.sort((a, b) => (a[type] < b[type] ? -1 : 1))
  } else {
    return array.sort((a, b) => (a[type] > b[type] ? 1 : -1))
  }
}

// PROTOTYPE: Array getAllBy(Array array, String find).
// DESCRIPTION: Recibe un array y devuelve un array con todos los elementos buscados.
const getAllBy = (array, find) => {
  const res = array.map((ele) => ele[find])
  return res
}

// PROTOTYPE: Set getAllByDirectors().
// DESCRIPTION: Recibe un array y devuelve un array Set con todos los directores de peliculas
const getAllDirectors = (array) => {
  const res = getAllBy(array, 'director')
  return new Set(res)
}

// PROTOTYPE: Array getPelisFrom(Array array, String type, String find).
// DESCRIPTION: Recibe como parametro un array de peliculas y un type (director, year) y devuelve un array
//              con todas los elemneto iguales al find
const getPelisFrom = (array, key, find) => {
  return array.filter((movie) => movie[key] === find)
}

// PROTOTYPE: Float pelisAverage(Array arrayMovies).
// DESCRIPTION: Recibe como parametro un array de peliculas y devuelve el promedio de todas sus pelis
const pelisAverage = (arrayMovies) => {
  return averageToKey(arrayMovies, 'score')
}

// PROTOTYPE: Array getOrderedMovies(Array arrayMovies, String type, Number size).
// DESCRIPTION: Recibe como parametro un array de peliculas un typo y un tamaño y devuelve un array con
//             las peliculas ordenadas
const getOrderedMovies = (arrayMovies, type, size) => {
  const ordenedMovies = sortBy(arrayMovies, type)
  return ordenedMovies.slice(0, size)
}

// PROTOTYPE: Array getBestMoviesToYear(Array array, String year).
// DESCRIPTION: Recibe como parametro un array de peliculas, un string year y devuelve un array con
//             las mejores peliculas de ese año (year)
const getBestMoviesToYear = (array, year) => {
  const arrayBestMovies = array.filter((ele) => ele.year === +year)
  const bestMovieToScore = sortBy(arrayBestMovies, 'score', 'Desc')
  return bestMovieToScore.slice(0, 1)
}
