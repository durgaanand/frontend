import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookingHomeComponent } from './add-booking-home.component';

describe('AddBookingHomeComponent', () => {
  let component: AddBookingHomeComponent;
  let fixture: ComponentFixture<AddBookingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
