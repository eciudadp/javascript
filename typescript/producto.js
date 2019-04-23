"use strict";
exports.__esModule = true;
var cesta_1 = require("./cesta");
var Producto = /** @class */ (function () {
    //public nombre : string;
    //public precio: number;
    //public fechaCad: Date;
    //public id: number;
    function Producto(nombre, precio, fechaCad, id) {
        if (id === void 0) { id = cesta_1.CestaCompra.siguienteId; }
        this.nombre = nombre;
        this.precio = precio;
        this.fechaCad = fechaCad;
        this.id = id;
        cesta_1.CestaCompra.siguienteId++;
        // this.id=id;
        // this.precio = nombre;
        // this.nombre=nombre;
        // this.fechaCad = fechaCad;
    }
    Producto.prototype.toString = function () {
        console.log("#" + this.id + " " + this.nombre + " (" + this.precio + "\u20AC) caduca en " + this.fechaCad);
    };
    return Producto;
}());
exports.Producto = Producto;
