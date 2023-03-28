import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/module/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userService:UserserviceService, private router:Router) { }
  users:User= new User();

   ngOnInit(): void {
  }
  addUser():void{
    this.userService.addUser(this.users).subscribe(data=>
      {
        alert("User Added");
        this.router.navigateByUrl("userlogin");
      },
      error=>
      {
        console.log("error in adding user",error);
      }
    );
  }
}
