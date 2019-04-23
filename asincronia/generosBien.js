const URL_GENEROS = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const URL_PELICULAS = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";

function elegirOpcion(generos) {
  let listaOpciones = generos.map((gen, pos) => `${pos} (${gen})`).join(', ');

  return parseInt(prompt(`Elige el genero de las peliculas: ${listaOpciones}`))
}

function getGeneros() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL_GENEROS);

  xhr.addEventListener('readystatechange', function () {
    if (xhr.readyState === 4) {
      let generos = JSON.parse(xhr.responseText);
      let opcion = elegirOpcion(generos);
      getPeliculasPorGenero(generos[opcion]);
    }
  });

  xhr.send();
}

function getPeliculasPorGenero(genero) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL_PELICULAS+genero+'.json');

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      let peliculas = JSON.parse(xhr.responseText);
      console.log(peliculas);
      for (let id in peliculas) {
        console.log(`Las peliculas del genero ${genero} son: ${peliculas[id].join(', ')}`)
      }
    }
  });

  xhr.send();
}

getGeneros();