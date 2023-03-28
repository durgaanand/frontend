import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/module/user';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  userList :User[] =[];

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(data =>{
      this.userList = data;
    },
    error =>{
      console.log("An error has occured "+error);
    }
    );
  }


  deleteUser(userId:number)
  {
    alert(userId);
     this.adminService.deleteUser(userId).subscribe(data=>
       {
        //this.userList=this.userList.filter(e=>e!==userId);
        this.userList=data;
       },
       error =>{
         console.log("An error has occured while deleting "+error);
       }

       )
       window.location.reload();
    }
}
