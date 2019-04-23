import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPropioTwoWayBindingComponent } from './cmp-propio-two-way-binding.component';

describe('CmpPropioTwoWayBindingComponent', () => {
  let component: CmpPropioTwoWayBindingComponent;
  let fixture: ComponentFixture<CmpPropioTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPropioTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPropioTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
