import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-event-binding',
  templateUrl: './cmp-event-binding.component.html',
  styleUrls: ['./cmp-event-binding.component.css']
})
export class CmpEventBindingComponent implements OnInit {

  constructor() { }

  saludar(event){
    alert('Hello motherfucker');
    console.log(event.target.value);
  }
  ngOnInit() {
  }

}
