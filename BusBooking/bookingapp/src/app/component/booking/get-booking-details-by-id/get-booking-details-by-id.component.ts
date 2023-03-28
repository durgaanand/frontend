import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/module/booking';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-get-booking-details-by-id',
  templateUrl: './get-booking-details-by-id.component.html',
  styleUrls: ['./get-booking-details-by-id.component.css']
})
export class GetBookingDetailsByIdComponent implements OnInit {

  bookingId!: number;
  booking: Booking = new Booking;

  bookingFound: boolean = false;
  bookingNotFound: boolean = false;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  getBookingDetailsById(bookingId: number) {
    this.bookingService.getBookingDetailsById(bookingId).subscribe(data => {
      this.booking = data;
      this.bookingFound = true;
      this.bookingNotFound = false;
    }, 
    error => {
      console.log("Error Occured: ", error);
      this.bookingFound = false;
      this.bookingNotFound = true;
    });
  }

  deleteBooking(bookingId:number)
  {
    alert(bookingId);
     this.bookingService.deleteBooking(bookingId).subscribe(data=>
       {
        //this.userList=this.userList.filter(e=>e!==userId);
        this.booking=data;
       },
       error =>{
         console.log("An error has occured while deleting "+error);
       }

       )
       window.location.reload();
    }

}
