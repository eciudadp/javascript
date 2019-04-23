"use strict";
/*
var nombre: string = "Angel";
nombre = "3";
console.log("Se llama " + nombre);

//Union de tipos
var variosTipos: number | boolean = true;
variosTipos = 3;
//variosTipos = "Un string";

//alias
type numBool = number | boolean;
var otraVariableTipos: numBool;
otraVariableTipos = false;

var esVerdad = true;
//esVerdad =1;

//sin tipo y sin inicializar coge tipo any
var una;
una = 1;
una = "una";

//Template literals
var apellido = "Villalba";
console.log("Se llama " + nombre + " " + apellido);
console.log(`Se llama:
  ${nombre} ${apellido}`);

//desestructuracion
var serie = {
    titulo: "Game of thrones",
    vista: false
}
//var titulo= serie.titulo;
//var vista = serie.vista;
var { titulo, vista } = serie

var personajes = ["Robb", "Arya", "Sansa", "Bran", "Rickon", "Jon",];
var [robb, arya, ...restoPersonajes] = personajes;
console.log(`Mis personajes favoritos de ${titulo} son ${robb} y ${arya}`);

//condicionales
var num = "1"
if (num == 1) {
    console.log("Es 1");
} else if (num == 2) {
    console.log("Es 2");
} else {
    console.log("Es otro");
}


switch (num) {
    case 1:
        console.log("Es 1");
        break;
    case 2:
        console.log("Es 2");
        break;
    default:
        console.log("Es otro");

}
//bucles
for (var i = 0; i < personajes.length; i++) {
    console.log(personajes[i]);
}

for (let i in personajes) {
    //la  i obtiene la posicion
    console.log(`${i}: ${personajes[i]}`);
}

for (let i of personajes) {
    //la  i obtiene el valor
    console.log(i);
}

personajes.forEach(function (val, pos) {
    console.log(`${pos}: ${val}`)
});
var index = 0
while (index < 3) {
    console.log('hola a todos');
    index++;
}

//funciones

function getNumLoteria(...nums: Array<number>): string {

    return nums
        .sort(function (a, b) { return a - b; }).join(",");
}
var num = getNumLoteria(12, 4,3,8);
console.log(num);

//arrow functions
personajes.forEach(function (val, pos) {
    console.log(`${pos}: ${val}`)
});

personajes.forEach((val, pos) =>{
    console.log(`${pos}: ${val}`)
});
//si solo hay un parametro y un unico comando dentro
personajes.forEach(val =>
    console.log(val)
);
function esPar(n){
    return n%2===0;
}
let numPares = [1,2,3,4,5].filter(esPar);
console.log(numPares);

function getDatos(cb: Function){
    console.log("dentro de get datos");
    setTimeout(()=>{
        //return['un dato', 'otro Dato'];
        cb(['un dato', 'otro Dato']);
    },2000);
}
console.log('antes de getDatos');
//console.log(getDatos());
var muestraDatos
getDatos(datos =>{
    console.log(datos);
})
*/
//clases e interfaces
exports.__esModule = true;
// class CestaCompra{
//     static siguienteId: number = 2;
//     constructor(public lista: Array<Producto>=[]){}
//     addProducto(nuevoProducto:Producto): void{
//         this.lista.push(nuevoProducto);
//     }
// }
// class Producto{
//     //public nombre : string;
//     //public precio: number;
//     //public fechaCad: Date;
//     //public id: number;
//     constructor(
//         public nombre: string, 
//         public precio: number, 
//         public fechaCad: Date,
//         public id: number = CestaCompra.siguienteId){
//             CestaCompra.siguienteId ++;
//         // this.id=id;
//         // this.precio = nombre;
//         // this.nombre=nombre;
//         // this.fechaCad = fechaCad;
//         }
//         toString(){
//             console.log(`#${this.id} ${this.nombre} (${this.precio}€) caduca en ${this.fechaCad}`);
//         }
// }
var producto_1 = require("./producto");
var cesta_1 = require("./cesta");
var oneplus = new producto_1.Producto("One Plus 6T", 500, new Date(2019, 5, 20));
oneplus.toString();
var miCesta = new cesta_1.CestaCompra();
miCesta.addProducto(oneplus);
console.log(miCesta);
console.log(cesta_1.CestaCompra.siguienteId);
