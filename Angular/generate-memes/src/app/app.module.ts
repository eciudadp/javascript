import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpImagenComponent } from './cmp-imagen/cmp-imagen.component';
import { CmpFormularioComponent } from './cmp-formulario/cmp-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpImagenComponent,
    CmpFormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
