import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false
})
export class FiltroçPipe implements PipeTransform {

  transform(value: Array<string>, args: string): Array<string> {
    return value.filter(nombre =>{
      return nombre.includes(args);
    });
  }

}
