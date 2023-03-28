import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-revenuebyroutename',
  templateUrl: './revenuebyroutename.component.html',
  styleUrls: ['./revenuebyroutename.component.css']
})
export class RevenuebyroutenameComponent implements OnInit {

  routename:string="";
  revenue:number[]=[];
  constructor(private operatorService:OperatorService,private route:Router) { }

  revFound: boolean = false;
  revNotFound: boolean = false;
  ngOnInit(): void {
  }
  getrevenue(){
    this.operatorService.getRevenueByBusRoute(this.routename).subscribe(data=>
      {
        this.revenue=data;
        this.revFound = true;
        this.revNotFound = false;
      },
      err=>
      {
        alert(err.error);
        console.log("error occured",err.error);
        this.revFound = false;
        this.revNotFound = true;
      });
  }
}
