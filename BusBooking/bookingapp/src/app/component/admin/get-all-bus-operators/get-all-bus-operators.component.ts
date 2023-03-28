import { Component, OnInit } from '@angular/core';
import { BusOperator } from 'src/app/module/bus-operator';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-get-all-bus-operators',
  templateUrl: './get-all-bus-operators.component.html',
  styleUrls: ['./get-all-bus-operators.component.css']
})
export class GetAllBusOperatorsComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  operatorList :BusOperator[] =[];

  ngOnInit(): void {
    this.adminService.getAllBusOperators().subscribe(data =>{
      this.operatorList = data;
    },
    error =>{
      console.log("An error has occured "+error);
    } 
    );
  }


  deleteBusOperator(busOperatorUserName:string)
  {
     this.adminService.deleteBusOperator(busOperatorUserName).subscribe(data=>
       {
        //this.operatorList=this.operatorList.filter(e=>e!==busOperatorUserName);
        this.operatorList=data;
       }
       )
       window.location.reload();
    }

}
