import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/module/booking';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-get-all-bookings',
  templateUrl: './get-all-bookings.component.html',
  styleUrls: ['./get-all-bookings.component.css']
})
export class GetAllBookingsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  bookingList :Booking[] =[];

  ngOnInit(): void {
    this.adminService.getAllBookings().subscribe(data =>{
      this.bookingList = data;
    },
    error =>{
      console.log("An error has occured "+error);
    }
    );
  }


  // deleteBooking(del:Booking)
  // {
  //    this.adminService.deleteBooking(del).subscribe(data=>
  //      {
  //       this.bookingList=this.bookingList.filter(e=>e!==del);
  //       this.bookingList=data;
  //      }

  //      )
  //      window.location.reload();
  //   }


}
