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
        if (typeof this.obtenerPeli(pelicula.codId) === "undefined") {
            var peliculas = this.getPeliculasFromLocalStorage();
            //pelicula.fecha = pelicula.fecha.toJSON();
            pelicula.fecha = new Date (pelicula.fecha);
            peliculas.push(pelicula);
            this.setPeliculasToLocalStorage(peliculas);
        }
    }

    muestraPelis() {
        return this.getPeliculasFromLocalStorage();
    }

    obtenerPeli(codId) {
        var listaPelis = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPelis.length; i++) {
            var peliActual = listaPelis[i];
            if (peliActual.codId == codId){
                peliActual.fecha = new Date(peliActual.fecha)
                return peliActual;
            }
        }
    }

    borrarPeli(codId) {
        var listaPelis = this.getPeliculasFromLocalStorage();
        for (let i = 0; i < listaPelis.length; i++) {
            var peliactual = listaPelis[i];
            if (peliactual.codId == codId) {
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
            if (peliActual.codId == pelicula.codId) {
                //pelicula.fecha = pelicula.fecha.toJSON();
                //pelicula.fecha = new Date(pelicula.fecha);
                listaPelis[i] = pelicula;
                this.setPeliculasToLocalStorage(listaPelis);
                return true;
            }
        }
        return false;
    }

}