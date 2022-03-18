/*
Exercici 4, Event al formulari: input 
  <form action="/buscador" method="POST" class="formulario " id="formulario" > 
    <input type="text" name="busqueda" class="busqueda" placeholder=" "> 
    <input type="submit" value="Buscar" id="btn-submit"> 
  </form>

Si li donem a Buscar intentará enviar el Formulari al servidor.
Però hem d'evitar enviar-ho si no està validat, per això fem servir preventDefault
Fes que al clickar buscar, no envii el formulari
*/

const formularioBusqueda = document.querySelector('form#formulario')

formularioBusqueda.addEventListener('submit', (e) => {
  e.preventDefault()
})
