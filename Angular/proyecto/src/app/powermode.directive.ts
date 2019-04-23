import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appPowermode]'
})
export class PowermodeDirective {
  //const pos = Math.floor(Math.random()*this.mascotas.length);
  colores = ['blue', 'red', 'green', 'orange'];
  colorLetraPorDefecto: string = 'black';
  @Input('appPowermode') colorLetra: string;
  @HostBinding('style.color') color: string;
  @HostBinding('style.marginTop') margenT: string = '0px';
  @HostBinding('style.marginLeft') margenL: string = '0px';

  constructor(private elemRef: ElementRef) {

  }

  ngOnInit() {

  }
  getRandomColor(): string{
    const pos = Math.floor(Math.random()*this.colores.length);
    return this.colores[pos];
  }

  @HostListener('keyup') keyUp() {
    this.color = this.getRandomColor();
    this.colorea(this.color);
    this.vibrar ('0px');
  }

  @HostListener('input') keyDown() {
    this.color = this.getRandomColor();
    this.colorea(this.color);
    this.vibrar ('3px');
  //   setTimeout(300);
  //   this.vibrar ('0px');
   }

  colorea(color: string) {
    this.color = color;
  }

  vibrar(margen: string){
    this.margenT = margen;
    this.margenL = margen;
  }
}
