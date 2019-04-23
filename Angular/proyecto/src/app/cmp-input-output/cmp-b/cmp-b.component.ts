import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
  @Input() nombreHermano: string = '';
  constructor() { }

  ngOnInit() {
  }

}
