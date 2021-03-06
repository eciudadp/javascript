import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './tarea';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private URL: string = "https://todo-list-603ba.firebaseio.com/tasks"

  //private idCont: number = 3;
  sendTarea = new EventEmitter<Tarea>();
  // private tareas: Array<Tarea> = [new Tarea('ver GoT', false, '0'),
  datosCambiados = new EventEmitter<boolean>();
  // new Tarea('Acabar la lista de Tareas', false, '1'),
  // new Tarea('Morir', false, '2')]
  constructor(private http: HttpClient) { }

  getTareas(): Observable<Array<Tarea>> {
    return this.http.get(`${this.URL}.json`)
      .pipe(
        map((resp) => {
          return this.parseResponseToArray(resp);
        })
      );
  }

  parseResponseToArray(resp): Array<Tarea> {
    let arrayTareas: Array<Tarea> = [];
    for (let id in resp) {
      let obj = resp[id];
      const tarea = new Tarea(obj.nombre, obj.completada, id);
      arrayTareas.push(tarea);
    }
    return arrayTareas;
  }
  // getTarea(id: string): Tarea {
  //   return this.tareas.find((tarea) => {
  //     return tarea.id === id;
  //   })
  // }
  addTarea(nombre: string): Observable<any> {
    const tarea = { nombre: nombre, completada: false };
    return this.http.post(`${this.URL}.json`, tarea);
  }

  deleteTarea(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}.json`);
  }
  updateTarea(tarea: Tarea): Observable<any> {
    const tareaActualizada = { nombre: tarea.nombre, completada: tarea.completa };
    return this.http.put(`${this.URL}/${tarea.id}.json`, tareaActualizada);
  }

  sendTareaToEdit(tarea: Tarea): void {
    this.sendTarea.emit(tarea);
  }

  actualizarLista(): void {
    this.datosCambiados.emit(true);
  }

}
