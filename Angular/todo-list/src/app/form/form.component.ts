import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TareasService } from '../tareas.service';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formTarea: FormGroup;
  esNuevaTarea = true;
  editarTarea: Tarea;

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.inicializarForm();
    this.tareasService.sendTarea.subscribe(
      (tarea: Tarea) =>{
        this.editarTarea = tarea;
        this.esNuevaTarea = false;
        this.inicializarForm();
      });
  }
inicializarForm(){
  let nombreTarea = this.esNuevaTarea ? '' : this.editarTarea.nombre;
  this.formTarea = new FormGroup({
    nombre: new FormControl(nombreTarea, Validators.required)
  });
}



  guardar() {
    let nombreTarea = this.formTarea.value.nombre

    if(this.esNuevaTarea){
      this.tareasService.addTarea(this.formTarea.value.nombre).subscribe(() => {
        this.tareasService.actualizarLista();
      });
    }else{
      const tareaActualizada = new Tarea (nombreTarea, this.editarTarea.completa, this.editarTarea.id);
      this.tareasService.updateTarea(tareaActualizada).subscribe(() => {
        this.tareasService.actualizarLista();
      });
    }
    
    this.formTarea.reset();
    this.esNuevaTarea = true;
  }

}
