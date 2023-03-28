import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/module/booking';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-add-new-booking',
  templateUrl: './add-new-booking.component.html',
  styleUrls: ['./add-new-booking.component.css']
})
export class AddNewBookingComponent implements OnInit {

  bkl:Booking=new Booking();
  busroutes:any[]=[];
  routeName:String="";
  fare:number=0;
  destination:string="";
  constructor(private bookingServe:BookingService,private router:Router) { }

  ngOnInit(): void {
  }
  loadRoutes(source:String){
    this.bookingServe.getBusRoute(source).subscribe(
      data=>{
        console.log(data);
        if(Object.keys(data).length!=0){
        this.busroutes=data;
        }
        else{
          alert("No Routes Found");
          window.location.reload();
        }
      }
    )
  }
  findFare(seats:number,routename:String,busnumber:String){
    this.bookingServe.findFare(seats,routename,busnumber).subscribe(
      data=>{
        this.fare=data;
      }
    )
  }
 
  addBooking()
 {
  this.bkl.amountPaid=this.fare;
  this.bkl.destination=this.destination;
  this.bkl.username=localStorage.getItem('username') || ""; 
  this.bookingServe.addBooking(this.bkl).subscribe(
    data=>
    {
      alert("booking added");
      this.router.navigateByUrl("userhome/printbooking");
    },
    error=>
    {
        console.log("error occured",error);
    }
  );
  }
}
