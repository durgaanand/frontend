import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print-booking',
  templateUrl: './print-booking.component.html',
  styleUrls: ['./print-booking.component.css']
})
export class PrintBookingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
