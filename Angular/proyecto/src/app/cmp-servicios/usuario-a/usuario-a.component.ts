import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-usuario-a',
  templateUrl: './usuario-a.component.html',
  styleUrls: ['./usuario-a.component.css']
})
export class UsuarioAComponent implements OnInit {

  mensajesChat = [];
  constructor(private charService: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.charService.getChat();
  }

  enviarMensaje(texto: string): void {
    this.charService.addMsg({ msg: texto, user: 'A' });
  }

  enviarMensajeDirecto(texto: string): void {
    this.charService.enviarMD(texto);
  }
}
