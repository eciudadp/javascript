import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'double'
})
export class DoublePipe implements PipeTransform {

  transform(precio: number, args1: number, args2: number): number {
    let resultado = precio*2;
    if(args1){
      resultado += args1;
    }
    if(args2){
      resultado -= args2;
    }
    return resultado;
  }

}
