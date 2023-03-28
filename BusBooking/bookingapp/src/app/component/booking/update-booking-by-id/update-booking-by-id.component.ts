import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Booking } from 'src/app/module/booking';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-update-booking-by-id',
  templateUrl: './update-booking-by-id.component.html',
  styleUrls: ['./update-booking-by-id.component.css']
})
export class UpdateBookingByIdComponent implements OnInit {

  constructor(private bookingService: BookingService, private router: Router) { }

  bookingId!:number;
  bk: Booking = new Booking();
  booking: Booking = new Booking();

  bookingList:Booking[]=[];
  ngOnInit(): void {
    // this.bookingService.getBookingDetailsById(this.bookingId).subscribe(
    //   data => {
    //     this.booking = data;
    //   }
    // )
  }
 updateBookingById (booking1:Booking) {
    //this.bk = booking;
    this.bookingService.updateBookingById(this.booking).subscribe(
      data => {
        this.booking = booking1;
        alert("Updated")
        this.router.navigateByUrl("userhome");
      },
      error => {
        console.log("Error Occured: ", error);
      }
    )
  }

// booking1:Booking = new Booking();
//   sub:Subscription = new Subscription();
//   constructor(private bookingService:BookingService,private route:ActivatedRoute,private router:Router) { }


//   ngOnInit(): void {

//     let link = document.getElementById('jumbotron');
//     if(link != null)
//     {
//       link.style.display = "none";
//     }
//     let link1 = document.getElementById('marquee');
//     if(link1 != null)
//     {
//       link1.style.display = "none";
//     }

//     this.sub = this.route.params.subscribe(params =>
//       {
//         const bookingId = params['bookingId'];
//         if(bookingId) {
//           this.bookingService.getBookingDetailsById(bookingId).subscribe((data:any) =>
//           {
//             if(data) {
//               this.booking1 = data;
//             }
//             else
//             {
//               console.log(`Officer with ${bookingId} not found`);
//             }
//           }
//           );
//         }
//       }
//       );
//   }

//   updateBookingById(booking2:Booking)
//   {
    
   
//     this.bookingService.updateBookingById(this.booking1).subscribe(
//       data=>
//       {
        
//           this.booking1=booking2;
//          // console.log(this.officer1.userId +' '+ this.officer1.name +" "+this.officer1.state );
         
//          alert("Updated booking succesfully");
//          //this.router.navigateByUrl(`officerdashboard/${this.officer1.userId}/view`);
 
//       },
//       error=>
//       {
//         console.log("error occured ",error);
    
//       }
//     )
 
//   }
}
