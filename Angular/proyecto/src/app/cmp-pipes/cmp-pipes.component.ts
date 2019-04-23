import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
  nombre: string = "calcetines de minions"
  descripcion: string = "Ba ba ba bana nana ba na na baba nana banana baaa banana baaa quiero mi banana esto es una banana";
  precio: number =3.6;
  fechaVenta: Date= new Date(2019,3,18);
  nombres = ['Robb', 'Arya', 'Rickon', 'Sansa', 'Bran', 'Jon']
  constructor() { }

  ngOnInit() {
  }
  addNombre(nombre){
    this.nombres.push(nombre);
  }

}
