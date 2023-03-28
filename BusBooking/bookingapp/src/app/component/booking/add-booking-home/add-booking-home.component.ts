import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booking-home',
  templateUrl: './add-booking-home.component.html',
  styleUrls: ['./add-booking-home.component.css']
})
export class AddBookingHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.router.navigateByUrl("/addpassenger");
  }

}
