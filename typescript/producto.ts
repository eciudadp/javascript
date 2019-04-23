import {CestaCompra} from './cesta';
export class Producto{
    //public nombre : string;
    //public precio: number;
    //public fechaCad: Date;
    //public id: number;
    constructor(
        public nombre: string, 
        public precio: number, 
        public fechaCad: Date,
        public id: number = CestaCompra.siguienteId){
            CestaCompra.siguienteId ++;
        // this.id=id;
        // this.precio = nombre;
        // this.nombre=nombre;
        // this.fechaCad = fechaCad;
        }
        toString(){
            console.log(`#${this.id} ${this.nombre} (${this.precio}€) caduca en ${this.fechaCad}`);
        }
}