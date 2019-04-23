import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit{
  colorFondoPorDefecto: string = 'white';
  @Input('appMarcar') colorFondo : string;
  @HostBinding('style.backgroundColor') color: string;

  constructor(private elemRef: ElementRef) { 
    //elemRef.nativeElement.style.backgroundColor = this.colorFondo;
  }
    
  ngOnInit(){
    //this.elemRef.nativeElement.style.backgroundColor = this.colorFondo;
    this.colorFondo = this.colorFondo ? this.colorFondo : 'red';
  }

  @HostListener('mouseover') pasarEncima(){
    this.elemRef.nativeElement.style.backgroundColor = this.colorFondo;
    this.pintar(this.colorFondo);
  }
  @HostListener('mouseout') saleDelElemento(){
    //this.elemRef.nativeElement.style.backgroundColor = this.colorFondoPorDefecto;
    this.pintar(this.colorFondoPorDefecto);
  }
  pintar(color: string){
    this.color = color;
  }
}
