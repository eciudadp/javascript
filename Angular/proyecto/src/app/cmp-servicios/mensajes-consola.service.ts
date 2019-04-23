import { Injectable, EventEmitter } from '@angular/core';

class MensajesConsolaFechaService {

  constructor() { }

  mostrarMensaje(msg: string): void{
    alert(new Date().toDateString() + 'MSG:' + msg);
  }
}




@Injectable({
  providedIn: 'root',
  // useClass: MensajesConsolaFechaService
})
export class MensajesConsolaService {

  constructor() { }

  mostrarMensaje(msg: string): void{
    alert('MSG:' + msg);
  }
}
