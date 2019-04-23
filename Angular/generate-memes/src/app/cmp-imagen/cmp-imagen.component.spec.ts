import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpImagenComponent } from './cmp-imagen.component';

describe('CmpImagenComponent', () => {
  let component: CmpImagenComponent;
  let fixture: ComponentFixture<CmpImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
