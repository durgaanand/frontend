import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBookingsByUsernameComponent } from './get-all-bookings-by-username.component';

describe('GetAllBookingsByUsernameComponent', () => {
  let component: GetAllBookingsByUsernameComponent;
  let fixture: ComponentFixture<GetAllBookingsByUsernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBookingsByUsernameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBookingsByUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
