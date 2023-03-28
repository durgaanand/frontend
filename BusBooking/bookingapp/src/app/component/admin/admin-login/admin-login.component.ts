import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/module/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }
  private valid:boolean=false;
    admin:Admin=new Admin();

    ngOnInit() {
    }
    onSubmit(){
        this.adminService.validateAdmin(this.admin).subscribe(data=>
          {
          this.valid=data;
          this.valid?this.router.navigateByUrl("adminhome"):this.Invalid();
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
