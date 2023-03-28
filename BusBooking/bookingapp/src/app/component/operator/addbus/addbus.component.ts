import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/module/bus';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  b:Bus=new Bus();
  constructor(private operatorService:OperatorService) { }
  
  busFound: boolean = false;

  ngOnInit(): void {
  }

  addBus():void{
    this.operatorService.addBus(this.b ).subscribe((data: any)=>
      {
        alert("Bus added");
        
      this.busFound = true;
      }, 
      (      error: any)=>
      {
        console.log("Error occured",error);
        this.busFound = false;
      }
    );


 
  }


}
