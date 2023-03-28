import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Busroute } from 'src/app/module/busroute';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-busroute',
  templateUrl: './update-busroute.component.html',
  styleUrls: ['./update-busroute.component.css']
})
export class UpdateBusrouteComponent implements OnInit {
  
  update: Busroute[]=[];
  busroutes:Busroute=new Busroute();
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  updateBusRoute(){
    this.adminService.updateBusRoute(this.busroutes).subscribe(data=>
      {
        
        this.busroutes=data
        this.router.navigateByUrl("Busroute");
        alert("Bus Routename updated");
      },
      err=>
      {
        alert(err.error);
        console.log("error in updating user",err);
      }
    );
  }


}
