import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpRefPlantillaComponent } from './cmp-ref-plantilla.component';

describe('CmpRefPlantillaComponent', () => {
  let component: CmpRefPlantillaComponent;
  let fixture: ComponentFixture<CmpRefPlantillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpRefPlantillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpRefPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
