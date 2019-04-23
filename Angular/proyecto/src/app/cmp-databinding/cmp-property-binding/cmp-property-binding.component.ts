import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-property-binding',
  templateUrl: './cmp-property-binding.component.html',
  styleUrls: ['./cmp-property-binding.component.css']
})
export class CmpPropertyBindingComponent implements OnInit {

  ejemploPersonaje: string = "Davos Seaworth"
  constructor() { }

  ngOnInit() {
  }

}
