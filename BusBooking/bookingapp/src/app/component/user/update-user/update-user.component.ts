import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/module/user';
import { UserserviceService } from 'src/app/service/userservice.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private updateUserService:UserserviceService, private router:Router) { }

  update: User[]=[];
  users:User= new User();
  
  

  ngOnInit(): void {
  }
  
  
  updateUser():void{
    this.users.username=localStorage.getItem('username') || ""; 
    this.updateUserService.updatePassword(this.users).subscribe(data=>
      {
        this.users.password=data;
        alert("User updated");
        this.router.navigateByUrl("userhome");
      },
      err=>
      {
        alert(err.error);
        console.log("error in updating user",err);
      }
    );
  }
  

}
