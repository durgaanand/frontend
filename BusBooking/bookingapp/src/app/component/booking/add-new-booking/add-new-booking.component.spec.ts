import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBookingComponent } from './add-new-booking.component';

describe('AddNewBookingComponent', () => {
  let component: AddNewBookingComponent;
  let fixture: ComponentFixture<AddNewBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
