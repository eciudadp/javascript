const URL = "https://fluentjobs-fa22e.firebaseio.com/trabajos.json";
const URLgeneros = "https://ejemplos-dc1c1.firebaseio.com/generos.json";
const URLpelis = "https://ejemplos-dc1c1.firebaseio.com/peliculas/";

//GET -obtener
//POST -ccrear
//PUT -actualizar
//DELETE - eliminar
function getJobs() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);

    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === 4) {
            let ofertas = JSON.parse(xhr.responseText);
            console.log("Datos: ", ofertas);
        }
    })

    //xhr.onreadystatechange = function(){
    //    if(xhr.readyState == 4){
    //        let ofertas = JSON.parse(xhr.responseText);
    //        console.log("Datos: ", ofertas);
    //    }
    //}
    xhr.send();


}
function getGeneros() {
    let genre = new XMLHttpRequest();

    genre.open('GET', URLgeneros);

    genre.addEventListener('readystatechange', function () {

        if (genre.readyState === 4) {
            let generos = JSON.parse(genre.responseText);
            console.log("Datos: ", generos);
            let choice = prompt("Elige un genero: 0 (action) o 1 (terror)");
            if (parseInt(choice) === 0) {
                console.log("Has elegido la opción: ", generos[0]);
                getPeliculas(generos[0]);
            } else if (parseInt(choice) === 1) {
                console.log("Has elegido la opción: ", generos[1]);
                getPeliculas(generos[1]);
            }

            //console.log("Has elegido la opción: ", parseInt(choice));
        }
    })

    genre.send();
}

function getPeliculas(choice) {
    let pelis = new XMLHttpRequest();

    pelis.open('GET', URLpelis+choice+'.json');

    pelis.addEventListener('readystatechange', function () {

        if (pelis.readyState === 4) {
            let peliculas = JSON.parse(pelis.responseText);
            for (var x in peliculas) {
                
                    for (var i = 0; i < peliculas[x].length; i++) {
                        console.log("Datos: ", peliculas[x][i]);
                    }
               
            }
            //console.log("Datos: ", peliculas[choice]);
        }
    })

    pelis.send();
}



//getJobs();
getGeneros();
//getPeliculas();