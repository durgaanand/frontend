import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/module/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private userService:UserserviceService,private router:Router) { }
  private valid:boolean=false;
  user:User=new User();

    ngOnInit() {
    }
    onSubmit(){
        this.userService.validateUser(this.user).subscribe(data=>
        {
          this.valid=data;
          localStorage.setItem('username',this.user.username);
          this.valid?this.router.navigateByUrl("userhome"):this.Invalid();
          
        },
        err=>
        {
          alert(err.error);
          console.log("error in entering credentials",err);
        }
        );
    }
    Invalid(){
      alert("Invalid Username or password");
    }

}
