"use strict";
exports.__esModule = true;
var CestaCompra = /** @class */ (function () {
    function CestaCompra(lista) {
        if (lista === void 0) { lista = []; }
        this.lista = lista;
    }
    CestaCompra.prototype.addProducto = function (nuevoProducto) {
        this.lista.push(nuevoProducto);
    };
    CestaCompra.siguienteId = 2;
    return CestaCompra;
}());
exports.CestaCompra = CestaCompra;
