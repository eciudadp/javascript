import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-imagen',
  templateUrl: './cmp-imagen.component.html',
  styleUrls: ['./cmp-imagen.component.css']
})
export class CmpImagenComponent implements OnInit {

  @Input() textoUp: string  ='';
  @Input() textoDown: string  ='';
  URL = "https://www.google.com/search?rlz=1C1EJFA_enES801ES801&biw=1600&bih=789&tbm=isch&sa=1&ei=9vm2XMuKHOSMlwTrsIeABg&q=conan+swarzeneger+meme&oq=conan+swarzeneger+meme&gs_l=img.3...800696.1739052..1739400...0.0..0.72.585.11......0....1..gws-wiz-img.hFhmun1-KhU#imgrc=qHafDt9rPM7V3M:";

  constructor() { }

   

  ngOnInit() {
  }

}

