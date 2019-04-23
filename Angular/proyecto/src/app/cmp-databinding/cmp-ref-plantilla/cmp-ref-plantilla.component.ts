import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-ref-plantilla',
  templateUrl: './cmp-ref-plantilla.component.html',
  styleUrls: ['./cmp-ref-plantilla.component.css']
})
export class CmpRefPlantillaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarMsg(msg){
    console.log(msg);
  }
}
