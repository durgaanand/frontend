import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusOperator } from 'src/app/module/bus-operator';
import { OperatorService } from 'src/app/service/operator.service';


@Component({
  selector: 'app-operator-login',
  templateUrl: './operator-login.component.html',
  styleUrls: ['./operator-login.component.css']
})
export class OperatorLoginComponent implements OnInit {

  constructor(private operatorService:OperatorService,private router:Router) { }
  private valid:boolean=false;
  operator:BusOperator=new BusOperator();

  ngOnInit() {
  }

  onSubmit(){
    this.operatorService.validateOperator(this.operator).subscribe(data=>
    {
      this.valid=data;
      this.valid?this.router.navigateByUrl("operatorhome"):this.Invalid();
    },
    err=>
    {
      alert(err.error);
      console.log("error in entering credentials",err);
    });
  }

  Invalid(){
    alert("Invalid Username or password");
  }


}
