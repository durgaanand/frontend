import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookingByIdComponent } from './update-booking-by-id.component';

describe('UpdateBookingByIdComponent', () => {
  let component: UpdateBookingByIdComponent;
  let fixture: ComponentFixture<UpdateBookingByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBookingByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBookingByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
