import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TareaComponent } from './tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaTareasComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
