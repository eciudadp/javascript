import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-propio-two-way-binding',
  templateUrl: './cmp-propio-two-way-binding.component.html',
  styleUrls: ['./cmp-propio-two-way-binding.component.css']
})
export class CmpPropioTwoWayBindingComponent implements OnInit {

  producto: string = "One Plus 6T"
  constructor() { }

  resetProducto(){
    this.producto = "";
  }
  cambiaValor(event){
    this.producto = event.target.value;
  }

  ngOnInit() {
  }

}
