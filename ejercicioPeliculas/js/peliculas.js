console.log("inicio")

var listaPelis = new Array();

var pelicula = {
    "titulo": "",
    "director": "",
    "codigo": "",
    "genero": "",
    "fecha": "",
    "valoracion": ""
};




function creaPeli() {
    var title = document.getElementById("pelicula");
    var director = document.getElementById("director");
    var code = document.getElementById("codigo");
    var genre = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valora = document.getElementById("valoracion");


    pelicula.titulo = title.value;
    pelicula.director = director.value;
    pelicula.codigo = code.value;
    pelicula.genero = genre.value;
    pelicula.fecha = fecha.value;
    pelicula.valoracion = valora.value;

    return pelicula;
}
function insertaPeli1() {
    listaPelis.push(creaPeli);
}
function insertaPeli() {
    var title = document.getElementById("pelicula");
    var director = document.getElementById("director");
    var code = document.getElementById("codigo");
    var genre = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valora = document.getElementById("valoracion");
    var tabla = document.getElementById("tabla");

    title = title.value;
    console.log(title);
    director = director.value;
    console.log(director);
    code = code.value;
    console.log(code);
    genre = genre.value;
    console.log(genre);
    fecha = fecha.value;
    console.log(fecha);
    valora = valora.value;
    console.log(valora);
    console.log(tabla.value);
    //var pelicula = creaPeli();
    //tabla.appendChild(title);
    var cuerpo = document.getElementById("cuerpoTabla")
    var fila = document.createElement('tr');
    var celda1 = document.createElement('td');
    var celda2 = document.createElement('td');
    var celda3 = document.createElement('td');
    var celda4 = document.createElement('td');
    var celda5 = document.createElement('td');
    var celda6 = document.createElement('td');

    celda1.innerText = code;
    fila.appendChild(celda1);
    celda2.innerText = title;
    fila.appendChild(celda2);
    celda3.innerText = director;
    fila.appendChild(celda3);
    celda4.innerText = genre;
    fila.appendChild(celda4);
    celda5.innerText = fecha;
    fila.appendChild(celda5);
    celda6.innerText = valora;
    fila.appendChild(celda6);
    cuerpo.appendChild(fila);

    listaPelis.push(pelicula);
}


function borraPeli() {
    var tabla = document.getElementById("tabla");
    var code = document.getElementById("codigo");
    for(let i=0; i<listaPelis.length;i++){
        if(listaPelis[i].codigo==code.value) 
        return splice(i,1);
    }

    //tabla.removeChild(code.value);
}

function pelicula() {

    var title = document.getElementById("pelicula");
    var director = document.getElementById("director");
    var code = document.getElementById("codigo");
    var genre = document.getElementById("genero");
    var fecha = document.getElementById("fecha");
    var valora = document.getElementById("valoracion");
    var tabla = document.getElementById("tabla");
    title = title.value;
    director = director.value;
    code = code.value;
    //genre =genre.value;
    fecha = fecha.value;
    valora = valora.value;
}

