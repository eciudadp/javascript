import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {


  @Output() onTextUp = new EventEmitter<string>();
  @Output() onTextDown = new EventEmitter<string>();

  constructor() { }
  introducirTextoArriba(texto) {
    this.onTextUp.emit(texto);
  }

  introducirTextoAbajo(texto) {
    this.onTextDown.emit(texto);
  }
  ngOnInit() {
  }

}
