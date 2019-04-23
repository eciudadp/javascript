import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cmp-formularios',
  templateUrl: './cmp-formularios.component.html',
  styleUrls: ['./cmp-formularios.component.css']
})
export class CmpFormulariosComponent implements OnInit {

  miFormulario: FormGroup;

  constructor() { }

  ngOnInit() {
    this.miFormulario = new FormGroup({
      usuario: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  enviar() {
    console.log(this.miFormulario);
  }

}
