import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioBComponent } from './usuario-b.component';

describe('UsuarioBComponent', () => {
  let component: UsuarioBComponent;
  let fixture: ComponentFixture<UsuarioBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
