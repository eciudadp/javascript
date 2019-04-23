import { Component, OnInit } from '@angular/core';
import { MensajesConsolaService } from './mensajes-consola.service';

@Component({
  selector: 'app-cmp-servicios',
  templateUrl: './cmp-servicios.component.html',
  styleUrls: ['./cmp-servicios.component.css']
})
export class CmpServiciosComponent implements OnInit {

  constructor(private msgService: MensajesConsolaService) { }

  ngOnInit() {
  }

  saludar(){
    this.msgService.mostrarMensaje('Hola a todos');
    //console.log('wintwr has come');
  }
}
