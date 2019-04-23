import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {

  @Input() nombre: string = '';
  @Output() onChangeName = new EventEmitter<string>();
  constructor() { }

  cambiarNombre(nuevoNombre) {
    //this.nombre = nuevoNombre;
    this.onChangeName.emit(nuevoNombre);
  }
  ngOnInit() {
  }

}
