import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpTwoWayBindingComponent } from './cmp-two-way-binding.component';

describe('CmpTwoWayBindingComponent', () => {
  let component: CmpTwoWayBindingComponent;
  let fixture: ComponentFixture<CmpTwoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpTwoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
