import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  mostrar: boolean = true;

  mascotas: Array<string> = [
    'Gato',
    'Perro',
    'Canario',
    'Pez'
  ];
  miMascota: string = "";


  constructor() { }

  ngOnInit() {
    this.miMascota = this.getMascota();
  }

  cambiarMostrar() {
    this.mostrar = !this.mostrar;
  }
  getMascota() {
    const pos = Math.floor(Math.random()*this.mascotas.length);
    return this.mascotas[pos];
  }
  getClases(){
    return {azul: true, subrayado:true};
  }

}
