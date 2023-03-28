import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBookingDetailsByIdComponent } from './get-booking-details-by-id.component';

describe('GetBookingDetailsByIdComponent', () => {
  let component: GetBookingDetailsByIdComponent;
  let fixture: ComponentFixture<GetBookingDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBookingDetailsByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookingDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
