/////////FUNCIONES////////////
/*
      Author: @Luichidev
      Web: https://luichi.dev
      Creation_Date: 10/03/2022
      Revision: 10/03/2022
    */

// PROTOTYPE: String getAllDirectors().
// DESCRIPTION: Devuelve todos los directores de peliculas con un 'li'
const getAllDirectors = () => {
  let res = ''

  movies.forEach((ele) => {
    res += '<li>'
    res += ele.director
    res += '</li>'
  })
  return res
}

// PROTOTYPE: String getPelisFromDirector().
// DESCRIPTION: recive como parametro un director y muestra todas sus peliculas
const getPelisFromDirector = (director) => {
  let res = ''
  let moviesFronDirector = movies.filter((movie) => movie.director === director)
  moviesFronDirector.forEach((ele) => {
    res += '<li>'
    res += ele.title
    res += '</li>'
  })
  return res
}
