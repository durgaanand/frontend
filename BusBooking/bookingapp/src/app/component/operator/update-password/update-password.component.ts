import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusOperator } from 'src/app/module/bus-operator';
import { OperatorService } from 'src/app/service/operator.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  u:BusOperator=new BusOperator();
  constructor(private operatorService:OperatorService,private router:Router) { }

  ngOnInit(): void {
  }

 
  updatePassword():void{
    this.operatorService.updatePassword(this.u).subscribe(data=>
    
      {
        this.u=data;
        alert("User updated");
        this.router.navigateByUrl("operatorhome");
      },
      err=>
      {
        alert(err.error);
        console.log("error occured",err.error)
      });
  }
  
  

}
