import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meme } from './meme';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardaMemeService {

  private URL: string = 'https://ejemplos-dc1c1.firebaseio.com/memes/memes11';
  sendMeme = new EventEmitter<Meme>();

  constructor(private http: HttpClient) { }


  getMemes(): Observable<Array<Meme>> {
    return this.http.get(`${this.URL}.json`).pipe(
      map((resp) => this.parseResponseToArray(resp))
    );
  }

  guardaMeme(meme: Meme): Observable<any> {
    return this.http.post(`${this.URL}.json`, meme);
  }

  borraMeme(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}.json`);
  }


  parseResponseToArray(resp): Array<Meme> {
    let arrayMemes: Array<Meme> = [];
    for (let id in resp) {
      const obj = resp[id];
      const meme = new Meme(obj.testoArriba, obj.textoAbajo, obj.img, id);
      arrayMemes.push(meme);
    }
    return arrayMemes;
  }
}


