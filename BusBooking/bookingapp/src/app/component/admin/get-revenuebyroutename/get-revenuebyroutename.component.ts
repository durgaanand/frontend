import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-get-revenuebyroutename',
  templateUrl: './get-revenuebyroutename.component.html',
  styleUrls: ['./get-revenuebyroutename.component.css']
})
export class GetRevenuebyroutenameComponent implements OnInit {
  
  routename:string="";
  revenue:number[]=[];
  
  revFound: boolean = false;
  revNotFound: boolean = false;
  constructor(private adminService:AdminService,private route:Router) { }

  ngOnInit(): void {
  }
  getrevenue(){
    this.adminService.getRevenueByRoutename(this.routename).subscribe(data=>
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
