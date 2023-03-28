import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusOperator } from 'src/app/module/bus-operator';
import { OperatorService } from 'src/app/service/operator.service';


@Component({
  selector: 'app-add-bus-operator',
  templateUrl: './add-bus-operator.component.html',
  styleUrls: ['./add-bus-operator.component.css']
})
export class AddBusOperatorComponent implements OnInit {
  constructor(private BusOperatorServe:OperatorService,private router:Router) { }
  operator:BusOperator=new BusOperator();
  ngOnInit(): void {
  }

  addOperator():void{
    this.BusOperatorServe.addBusOperator(this.operator).subscribe(data=>
      {
        alert("Operator Registered");
        this.router.navigateByUrl("operatorlogin");
      },
      error=>
      {
        console.log("error in adding user",error);
      }
    );

 

 
  }

}
