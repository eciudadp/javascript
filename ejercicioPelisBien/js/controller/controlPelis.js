//gestor =  new gestorPelis();
console.log("controlador");
/*function inicializar() {
    //console.log("iniciado");
    gestor = new gestorPelis();
    //gestor.insertaPeli({ codigo: "AAA-11111-AA", pelicula: "El señor de los anillos 1", director: "Peter Jackson", genero: "Aventura", estreno: new Date(), valoracion: 10 })
    mostrarTabla();
}*/
function inicializar() {
    //console.log("iniciado");
    gestor = new gestorPelis();
    var ajax = new XMLHttpRequest();
    ajax.open("GET", ""http://192.168.1.63:8080/peliculas"");
    ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
            let datos = JSON.parse(ajax.responseText)
            for (let i=0; i < datos.length; i++) {
                gestor.insertaPeli(datos[i]);
            }
            mostrarTabla();
        }
    }
    ajax.send();

    //gestor.insertaPeli({ codigo: "AAA-11111-AA", pelicula: "El señor de los anillos 1", director: "Peter Jackson", genero: "Aventura", estreno: new Date(), valoracion: 10 })
    
}

function mostrarTabla() {
    var listaPelis = gestor.muestraPelis();
    var cuerpo = document.getElementById("cuerpoTabla");
    cuerpo.innerHTML = "";
    for (let i = 0; i < listaPelis.length; i++) {
        cuerpo.appendChild(generaFilaTabla(listaPelis[i]));
    }
}
function obtenerPeliFormulario() {
    peli = new pelicula();
    peli.pelicula = document.getElementById("pelicula").value;
    peli.director = document.getElementById("director").value;
    peli.codigo = document.getElementById("codigo").value;
    peli.genero = document.getElementById("genero").value;
    peli.estreno = document.getElementById("estreno").value;
    peli.valoracion = document.getElementById("valoracion").value;
    return peli;
}

function obtenerCodigoFormulario(codigo) {
    document.getElementById("codigo").value = codigo;
}
function rellenarCamposFormulario(pelicula) {
    document.getElementById("codigo").value = pelicula.codigo;
    document.getElementById("pelicula").value = pelicula.pelicula;
    document.getElementById("director").value = pelicula.director;
    document.getElementById("genero").value = pelicula.genero;
    document.getElementById("estreno").value = pelicula.estreno;
    document.getElementById("valoracion").value = pelicula.valoracion;
}
function limpiarFormulario() {
    document.getElementById("codigo").value = "";
    document.getElementById("pelicula").value = "";
    document.getElementById("director").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("estreno").value = "";
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
    id = document.getElementById("codigo").value;
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

    celda1.innerText = pelicula.codigo;
    celda1.onclick = function () {
        obtenerCodigoFormulario(pelicula.codigo)
    }
    fila.appendChild(celda1);
    celda2.innerText = pelicula.pelicula;
    fila.appendChild(celda2);
    celda3.innerText = pelicula.director;
    fila.appendChild(celda3);
    celda4.innerText = pelicula.genero;
    fila.appendChild(celda4);
    celda5.innerText = pelicula.estreno;
    fila.appendChild(celda5);
    celda6.innerText = pelicula.valoracion;
    fila.ondblclick = function () { rellenarCamposFormulario(pelicula) }
    fila.appendChild(celda6);
    return fila;
}