import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private idCont: number=3;
  private tareas: Array<Tarea> = [new Tarea('ver GoT', false, '0'),
           new Tarea('Acabar la lista de Tareas', false, '1'),
           new Tarea('Morir', false, '2')]
  constructor() { }

  getTareas(): Array<Tarea>{
    return this.tareas;
  }

  getTarea(id: string): Tarea{
    return this.tareas.find((tarea) =>{
      return tarea.id === id;
    })
  }
  addTarea(nombre: string): void{
    this.tareas.push(new Tarea(nombre,false,this.idCont+''));
    this.idCont++;
  }

  deleteTarea(id: string): void{

  }
  updateTarea(tarea: Tarea): void{

  }
}
