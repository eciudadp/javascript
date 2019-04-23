import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-imagen',
  templateUrl: './cmp-imagen.component.html',
  styleUrls: ['./cmp-imagen.component.css']
})
export class CmpImagenComponent implements OnInit {

  @Input() textoUp: string  ='';
  @Input() textoDown: string  ='';
  @Input() imgURL = "https://thumbs.gfycat.com/FaroffCoarseBarnacle-poster.jpg";

  constructor() { }

   

  ngOnInit() {
  }

}

