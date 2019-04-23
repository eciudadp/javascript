import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient} from '@angular/common';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class FeatureModule {}
@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  private URL = 'https://fluentjobs-fa22e.firebaseio.com/trabajos';
  constructor() { }

  getOfertas(){
    return this.http.get(`${this.URL}.json`);
  }
}
