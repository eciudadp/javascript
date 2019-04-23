import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-two-way-binding',
  templateUrl: './cmp-two-way-binding.component.html',
  styleUrls: ['./cmp-two-way-binding.component.css']
})
export class CmpTwoWayBindingComponent implements OnInit {

  producto: string = "One Plus 6T";
  constructor() { }

  resetProducto(){
    this.producto = "";
  }

  ngOnInit() {
  }

}
