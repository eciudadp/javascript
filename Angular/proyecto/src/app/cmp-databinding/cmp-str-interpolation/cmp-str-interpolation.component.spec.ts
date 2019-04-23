import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpStrInterpolationComponent } from './cmp-str-interpolation.component';

describe('CmpStrInterpolationComponent', () => {
  let component: CmpStrInterpolationComponent;
  let fixture: ComponentFixture<CmpStrInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpStrInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpStrInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
