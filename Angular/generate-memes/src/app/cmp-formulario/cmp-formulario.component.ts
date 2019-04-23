import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GuardaMemeService } from '../guarda-meme.service';
import { Meme } from '../meme';

@Component({
  selector: 'app-cmp-formulario',
  templateUrl: './cmp-formulario.component.html',
  styleUrls: ['./cmp-formulario.component.css']
})
export class CmpFormularioComponent implements OnInit {


  @Output() onTextUp = new EventEmitter<string>();
  @Output() onTextDown = new EventEmitter<string>();
  meme: Meme;
  constructor(private guardaMeme: GuardaMemeService) { }
  introducirTextoArriba(texto) {
    this.onTextUp.emit(texto);
  }

  introducirTextoAbajo(texto) {
    this.onTextDown.emit(texto);
  }
  

  saveImagen() {
    //alert("JAJAJAJAJAA PRINGA@ CREIAS QUE SE IBA A GUARDAR EL MEME XD");
    this.guardaMeme.guardaMeme(this.meme).subscribe((resp) => {
      console.log(resp);
    });
  }
  ngOnInit() {
  }

}
