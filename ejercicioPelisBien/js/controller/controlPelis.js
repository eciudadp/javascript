//gestor =  new gestorPelis();
console.log("controlador");
/*function inicializar() {
    //console.log("iniciado");
    gestor = new gestorPelis();
    //gestor.insertaPeli({ codigo: "AAA-11111-AA", pelicula: "El señor de los anillos 1", director: "Peter Jackson", genero: "Aventura", fecha: new Date(), valoracion: 10 })
    mostrarTabla();
}*/
function inicializar() {
    //console.log("iniciado");
    gestor = new gestorPelis();
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://192.168.1.63:8080/peliculas");
    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            let datos = JSON.parse(ajax.responseText)
            console.log(datos);

            /* for (let i = 0; i < datos.length; i++) {
                 gestor.insertaPeli(datos[i]);
                 
             }*/
            mostrarTabla(datos);
        }
    }
    ajax.send();
    //gestor.insertaPeli({ codigo: "AAA-11111-AA", pelicula: "El señor de los anillos 1", director: "Peter Jackson", genero: "Aventura", fecha: new Date(), valoracion: 10 })   
}

//---------------------------------------------------------AJAX---------------------------------------------------------------
function guardaUno() {
    var ajax = new XMLHttpRequest();
    ajax.open("POST", "http://192.168.1.63:8080/peliculas/", true);
    ajax.setRequestHeader(
        'Content-Type', 'application/json;charset=UTF-8')
    ajax.onreadystatechange = function () {

        if (ajax.status == 200 && ajax.readyState == 4) {
            var datos = JSON.parse(ajax.response)
            console.log(datos);
            //var peli = new pelicula();
            //gestor.insertaPeli(datos);
            mostrarTabla(datos);
        }
        console.log(ajax.readyState);

    }
    ajax.send(JSON.stringify(obtenerPeliFormulario()));
}

function dameUno() {
    var pelicula = obtenerPeliFormulario();

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "http://192.168.1.63:8080/peliculas/" + pelicula.codId);
    ajax.onreadystatechange = function () {

        if (ajax.status == 200 && ajax.readyState == 4) {
            var datos = JSON.parse(ajax.response)
            console.log(datos);
            /*for (let i=0; i < datos.length; i++) {
                gestor.insertaPeli(datos[i]);
            }*/
        }
        console.log(ajax.readyState);
    }

    ajax.send();
}

function borraUno() {
    var pelicula = obtenerPeliFormulario();

    var ajax = new XMLHttpRequest();
    ajax.open("DELETE", "http://192.168.1.63:8080/peliculas/" + pelicula.codId);
    ajax.onreadystatechange = function () {

        if (ajax.status == 200 && ajax.readyState == 4) {
            //datos = JSON.parse(ajax.response)
            //console.log(datos);
            gestor.borrarPeli(pelicula.codId);
            //eliminarPeliDeTabla();
        }
        console.log(ajax.readyState);
        mostrarTabla();
    }

    ajax.send();
}
function actualizaUno() {
    var pelicula = obtenerPeliFormulario();
    var ajax = new XMLHttpRequest();
    ajax.open("PUT", "http://192.168.1.63:8080/peliculas/" + pelicula.codId, true);
    ajax.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    ajax.onreadystatechange = function () {

        if (ajax.status == 200 && ajax.readyState == 4) {
            datos = JSON.parse(ajax.response)
            console.log(datos);
            gestor.actualizarPeli(pelicula);
        }
        console.log(ajax.readyState);
        mostrarTabla();
    }

    ajax.send(JSON.stringify(obtenerPeliFormulario()));
}
//--------------------------------------------------------------------------------------------------------------------------------
function mostrarTabla(datos) {
    //var listaPelis = gestor.muestraPelis();
    var listaPelis = datos;
    var cuerpo = document.getElementById("cuerpoTabla");
    cuerpo.innerHTML = "";
    for (let i = 0; i < listaPelis.length; i++) {
        cuerpo.appendChild(generaFilaTabla(listaPelis[i]));
    }
}
function obtenerPeliFormulario() {
    peli = new pelicula();
    peli.titulo = document.getElementById("titulo").value;
    peli.director = document.getElementById("director").value;
    peli.codId = document.getElementById("codId").value;
    peli.genero = document.getElementById("genero").value;
    peli.fecha = document.getElementById("fecha").value;
    peli.valoracion = document.getElementById("valoracion").value;
    return peli;
}

function obtenerCodigoFormulario(codId) {
    document.getElementById("codId").value = codId;
}
function rellenarCamposFormulario(pelicula) {
    document.getElementById("codId").value = pelicula.codId;
    document.getElementById("titulo").value = pelicula.titulo;
    document.getElementById("director").value = pelicula.director;
    document.getElementById("genero").value = pelicula.genero;
    document.getElementById("fecha").value = pelicula.fecha;
    document.getElementById("valoracion").value = pelicula.valoracion;
}
function limpiarFormulario() {
    document.getElementById("codId").value = "";
    document.getElementById("titulo").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("valoracion").value = "";
    /* var formulario = document.getElementsByTagName("section")[0];
     formulario.reset();*/
}

function insertarPeliEnTabla() {
    obtenerPeliFormulario()
    gestor.insertaPeli(peli);
    mostrarTabla();
}
function eliminarPeliDeTabla() {
    id = document.getElementById("codId").value;
    gestor.borrarPeli(id);
    mostrarTabla();

}

function modificarPeliEnTabla() {
    var peli = obtenerPeliFormulario();
    gestor.actualizarPeli(peli);
    mostrarTabla();

}


function generaFilaTabla(pelicula) {
    var fila = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");
    var celda5 = document.createElement("td");
    var celda6 = document.createElement("td");

    celda1.innerText = pelicula.codId;
    celda1.onclick = function () {
        obtenerCodigoFormulario(pelicula.codId)
    }
    fila.appendChild(celda1);
    celda2.innerText = pelicula.titulo;
    fila.appendChild(celda2);
    celda3.innerText = pelicula.director;
    fila.appendChild(celda3);
    celda4.innerText = pelicula.genero;
    fila.appendChild(celda4);
    celda5.innerText = pelicula.fecha;
    fila.appendChild(celda5);
    celda6.innerText = pelicula.valoracion;
    fila.ondblclick = function () { rellenarCamposFormulario(pelicula) }
    fila.appendChild(celda6);
    return fila;
}