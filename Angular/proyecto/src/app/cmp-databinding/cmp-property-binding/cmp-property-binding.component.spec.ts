import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpPropertyBindingComponent } from './cmp-property-binding.component';

describe('CmpPropertyBindingComponent', () => {
  let component: CmpPropertyBindingComponent;
  let fixture: ComponentFixture<CmpPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
