const URL_GENEROS = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const URL_PELICULAS = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";

var generoPelicula = '';

function getGeneros() {
  return fetch(URL_GENEROS)
    .then((resp) => {
      // console.log(resp);
      return resp.json();
    })
  }

function getPeliculasPorGenero(genero) {
  generoPelicula = genero;
  return fetch(URL_PELICULAS+genero+'.json')
    .then(resp => resp.json())

    // .catch(err => {
    //   console.error('Error: ', err);
    // })
}
getGeneros()
  .then((generos) => {
    // console.log(generos);
    let opcion = elegirOpcion(generos);
    console.log(opcion);
    return getPeliculasPorGenero(generos[opcion]);
  })
  .then(peliculas => {
    // console.log(peliculas);
    for (let id in peliculas) {
      console.log(`Las peliculas del genero ${generoPelicula} son: ${peliculas[id].join(', ')}`)
    }
  });

function elegirOpcion(generos) {
  let listaOpciones = generos.map((gen, pos) => `${pos} (${gen})`).join(', ');

  return parseInt(prompt(`Elige el genero de las peliculas: ${listaOpciones}`))
}
