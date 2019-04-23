import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-usuario-b',
  templateUrl: './usuario-b.component.html',
  styleUrls: ['./usuario-b.component.css']
})
export class UsuarioBComponent implements OnInit {
  mensajesChat = [];
  md: string = '';
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.mensajesChat = this.chatService.getChat();
    this.chatService.mdEnviado.subscribe((datoEmitido) => {
      this.md = datoEmitido;
    })
  }

  enviarMensaje(texto: string): void {
    this.chatService.addMsg({ msg: texto, user: 'B' });
  }

}
