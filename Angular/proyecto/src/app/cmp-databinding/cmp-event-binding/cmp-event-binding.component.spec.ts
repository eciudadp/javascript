import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpEventBindingComponent } from './cmp-event-binding.component';

describe('CmpEventBindingComponent', () => {
  let component: CmpEventBindingComponent;
  let fixture: ComponentFixture<CmpEventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpEventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
