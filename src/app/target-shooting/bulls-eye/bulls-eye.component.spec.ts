import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsEyeComponent } from './bulls-eye.component';

describe('BullsEyeComponent', () => {
  let component: BullsEyeComponent;
  let fixture: ComponentFixture<BullsEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullsEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullsEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
