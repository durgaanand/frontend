import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/module/passenger';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {

  pkl:Passenger=new Passenger();
  constructor(private passengerServe:BookingService,private router:Router) { }

  ngOnInit(): void {
  }
 
  addPassenger()
 {
   this.passengerServe.addPassenger(this.pkl).subscribe(
    data=>
    {
      alert("passenger added");
      this.router.navigateByUrl("userhome");
    },
    error=>
    {
        console.log("error occured",error);
    }
  );
  }

  gotoBooking()
  {
    this.router.navigateByUrl("userhome/addnewbooking"); 
  }


}
