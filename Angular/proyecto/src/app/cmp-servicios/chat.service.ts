import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

interface IMsg {
  msg: string,
  user: string
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chat: Array<IMsg> = [
    {
      msg: 'Bienvenido al chat', user: 'A'
    }];

  mdEnviado = new EventEmitter<string>();
  constructor() { }

  enviarMD(msg: string): void {
    this.mdEnviado.emit(msg);
  }

  addMsg(newMsg: IMsg): void {
    this.chat.push(newMsg);
  }

  getChat() {
    return this.chat;
  }
}
