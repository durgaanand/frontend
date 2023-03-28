import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/module/booking';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-get-all-bookings-by-username',
  templateUrl: './get-all-bookings-by-username.component.html',
  styleUrls: ['./get-all-bookings-by-username.component.css']
})
export class GetAllBookingsByUsernameComponent implements OnInit {

  username!: string;
  bookingFound: boolean = false;
  bookingNotFound: boolean = false;
  booking:Booking = new Booking;
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  getAllBookingsByUsername(username:string) {
    //alert(this.username);
    this.bookingService.getAllBookingsByUsername(username).subscribe(data => 
      {
      this.booking = data;
      this.bookingFound = true;
      this.bookingNotFound = false;
    }, err => {
      alert(err.error);
      console.log("Error Occured: ", err);
      this.bookingFound = false;
      this.bookingNotFound = true;
    });
  }

}
