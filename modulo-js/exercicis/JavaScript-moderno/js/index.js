/////////FUNCIONES////////////
/*
      Author: @Luichidev
      Web: https://luichi.dev
      Creation_Date: 10/03/2022
      Revision: 11/03/2022
    */

// PROTOTYPE: Float averageToKey(Array array, String key).
// DESCRIPTION: Devuelve la suma del contenido de la key de un array

const averageToKey = (array, key) => {
  let total = 0
  for (let i = 0; i < array.length; i++) {
    total += array[i][key]
  }
  return (total / array.length).toFixed(2)
}

// PROTOTYPE: Set getAllDirectors().
// DESCRIPTION: Devuelve un array con todos los directores de peliculas
const getAllDirectors = () => {
  const res = movies.map((ele) => ele.director)
  return new Set(res)
}

// PROTOTYPE: Array getPelisFromDirector().
// DESCRIPTION: Recibe como parametro un director y devuelve un array con todas sus peliculas
const getPelisFromDirector = (director) => {
  return movies.filter((movie) => movie.director === director)
}

// PROTOTYPE: Float pelisAverage().
// DESCRIPTION: Recibe como parametro un array de peliculas y devulve el promedio de todas sus pelis
const pelisAverage = (arrayMovies) => {
  return averageToKey(arrayMovies, 'score')
}

// PROTOTYPE: Array getOrderedMovies().
// DESCRIPTION: Recibe como parametro un array de peliculas y devulve el promedio de todas sus pelis
const getOrderedMovies = (arrayMovies, size) => {
  const titles = arrayMovies.map((ele) => ele.title)
  const ordenedTitles = titles.sort()
  return ordenedTitles.slice(0, size)
}
