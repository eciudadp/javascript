import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(nombre: string, args?: any): string {
    // if (nombre == null || nombre.length==0){
    //   return nombre;
    // }else{
      let valor= nombre.split("").reverse().join("");
    // }
       return valor;
  }

}
