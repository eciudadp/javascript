console.log("gestor");

class gestorPelis {
    constructor() {
        this.listaPelis = new Array();
    }

    insertaPeli(pelicula) {
        if (typeof this.obtenerPeli(pelicula.codigo) === "undefined") {
            this.listaPelis.push(pelicula);
        }
    }

    muestraPelis() {
        return this.listaPelis;
    }

    obtenerPeli(codigo) {
        for (let i = 0; i < this.listaPelis.length; i++) {
            if (this.listaPelis[i].codigo == codigo)
                return this.listaPelis[i];
        }
    }
    borrarPeli(codigo) {
        for (let i = 0; i < this.listaPelis.length; i++) {
            var actual = this.listaPelis[i].codigo;
            if (actual == codigo) {
                return this.listaPelis.splice(i, 1);
            }

        }
    }

    actualizarPeli(pelicula) {
        for (let i = 0; i < this.listaPelis.length; i++) {
            if (this.listaPelis[i].codigo == pelicula.codigo) {
                this.listaPelis[i] = pelicula;
                return true;
            }
        }
        return false;
    }
}

