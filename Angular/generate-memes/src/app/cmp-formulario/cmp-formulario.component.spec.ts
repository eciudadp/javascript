import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFormularioComponent } from './cmp-formulario.component';

describe('CmpFormularioComponent', () => {
  let component: CmpFormularioComponent;
  let fixture: ComponentFixture<CmpFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
