import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/modules/http';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { MiSegundoComponenteComponent } from './mi-segundo-componente/mi-segundo-componente.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpStrInterpolationComponent } from './cmp-databinding/cmp-str-interpolation/cmp-str-interpolation.component';
import { CmpPropertyBindingComponent } from './cmp-databinding/cmp-property-binding/cmp-property-binding.component';
import { CmpEventBindingComponent } from './cmp-databinding/cmp-event-binding/cmp-event-binding.component';
import { CmpTwoWayBindingComponent } from './cmp-databinding/cmp-two-way-binding/cmp-two-way-binding.component';
import { CmpPropioTwoWayBindingComponent } from './cmp-databinding/cmp-propio-two-way-binding/cmp-propio-two-way-binding.component';
import { CmpRefPlantillaComponent } from './cmp-databinding/cmp-ref-plantilla/cmp-ref-plantilla.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { CmpAComponent } from './cmp-input-output/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-input-output/cmp-b/cmp-b.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { DobleComponent } from './cmp-pipes/doble/doble.component';
import { DoublePipe } from './cmp-pipes/double.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { OcultaPipe } from './cmp-pipes/oculta.pipe';
import { FiltroçPipe } from './cmp-pipes/filtroç.pipe';
import { MarcarDirective } from './marcar.directive';
import { PowermodeDirective } from './powermode.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { UsuarioAComponent } from './cmp-servicios/usuario-a/usuario-a.component';
import { UsuarioBComponent } from './cmp-servicios/usuario-b/usuario-b.component';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    MiSegundoComponenteComponent,
    CmpDatabindingComponent,
    CmpStrInterpolationComponent,
    CmpPropertyBindingComponent,
    CmpEventBindingComponent,
    CmpTwoWayBindingComponent,
    CmpPropioTwoWayBindingComponent,
    CmpRefPlantillaComponent,
    CmpInputOutputComponent,
    CmpAComponent,
    CmpBComponent,
    CmpPipesComponent,
    DobleComponent,
    DoublePipe,
    ReversePipe,
    CmpDirectivasComponent,
    OcultaPipe,
    FiltroçPipe,
    MarcarDirective,
    PowermodeDirective,
    CmpServiciosComponent,
    UsuarioAComponent,
    UsuarioBComponent,
    CmpFormulariosComponent,
    CmpObservablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
