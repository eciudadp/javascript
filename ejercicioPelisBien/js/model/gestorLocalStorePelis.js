console.log("gestorStorage");
class gestorPelis {
    constructor() {
    
        if (localStorage.getItem("peliculas") == null) {
            localStorage.setItem("peliculas", JSON.stringify([]))
        }
    }
    
    getPeliculasFromLocalStorage(){
        return JSON.parse(localStorage.getItem("peliculas"));
    }
    
    setPeliculasToLocalStorage(peliculas){
        localStorage.setItem('peliculas', JSON.stringify(peliculas));
    }

    insertaPeli(pelicula) {
        if (typeof this.obtenerPeli(pelicula.codigo) === "undefined") {
            var peliculas = this.getPeliculasFromLocalStorage();
            //pelicula.estreno = pelicula.estreno.toJSON();
            //pelicula.estreno = new Date (pelicula.estreno);
            peliculas.push(pelicula);
            this.setPeliculasToLocalStorage(peliculas);
        }
    }

    muestraPelis() {
        return this.getPeliculasFromLocalStorage();
    }

    obtenerPeli(codigo) {
        var listaPelis = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPelis.length; i++) {
            var peliActual = listaPelis[i];
            if (peliActual.codigo == codigo){
                peliActual.estreno = new Date(peliActual.estreno)
                return peliActual;
            }
        }
    }

    borrarPeli(codigo) {
        var listaPelis = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPelis.length; i++) {
            var peliactual = listaPelis[i];
            if (peliactual.codigo == codigo) {
                var pelicula = listaPelis.splice(i, 1);
                this.setPeliculasToLocalStorage(listaPelis);
                return pelicula;
            }

        }
    }
    actualizarPeli(pelicula) {
        var listaPelis = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPelis.length; i++) {
            var peliActual = listaPelis[i];
            if (peliActual.codigo == pelicula.codigo) {
                //pelicula.estreno = pelicula.estreno.toJSON();
                //pelicula.estreno = new Date(pelicula.estreno);
                listaPelis[i] = pelicula;
                this.setPeliculasToLocalStorage(listaPelis);
                return true;
            }
        }
        return false;
    }

}