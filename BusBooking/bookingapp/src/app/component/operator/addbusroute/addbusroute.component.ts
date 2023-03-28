import { Component, OnInit } from '@angular/core';
import { Busroute } from 'src/app/module/busroute';
import { OperatorService } from 'src/app/service/operator.service';


@Component({
  selector: 'app-add-bus-route',
  templateUrl: './addbusroute.component.html',
  styleUrls: ['./addbusroute.component.css']
})

export class AddbusrouteComponent implements OnInit {
  br:Busroute=new Busroute();
  constructor(private operatorService:OperatorService) { }
  
  busRouteFound: boolean = false;

  ngOnInit(): void {
  }

  addbusroute():void{
    this.operatorService.addBusroute(this.br).subscribe((data:any) =>
      {
    
        alert("Busroute added");
        this.busRouteFound = true;
        
      }, 
      (      error: any)=>
      {
        console.log("Error occured",error);
        this.busRouteFound = false;
      }
    );

 

 
  }
 
  }

 

 
  