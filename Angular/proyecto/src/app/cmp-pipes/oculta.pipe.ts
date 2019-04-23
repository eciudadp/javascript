import { Pipe, PipeTransform } from '@angular/core';
import { getRootComponents } from '@angular/core/src/render3/discovery_utils';

@Pipe({
  name: 'oculta'
})
export class OcultaPipe implements PipeTransform {

  transform(value: string, args1: Array<string>, args2?: string): string {
   
    //hecho con include
    // let res =[];
    // let charOculto = args2 ? args2: '*';
    // let arrPalabras = value.split(" ");
    // for(let palabra of arrPalabras){
    //   if (args1.includes(palabra)){
    //         res.push(charOculto);
    //   }else{
    //     res.push(palabra);
    //   }
    // }
    // return res.join(" ");


    //hecho con replace 
    let res = value;
    let charOculto = args2 ? args2: '*';
    for (let palabraAOcultar of args1){
      let reg = new RegExp(palabraAOcultar, 'g');
      res = res.replace(reg, charOculto)
    }
      //let res = value.replace(/banana/ , '*');
    // }
    

    return res;
  }

}
