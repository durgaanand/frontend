import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/module/user';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private deleteUserService:UserserviceService, private router:Router) { }
  delete: User[]=[];
  users:User= new User();

  ngOnInit(): void {
}
deleteUser():void{
  this.users.username= localStorage.getItem('username') || "";
  this.deleteUserService.deleteUser(this.users.username).subscribe(data=>
    {
      
      this.router.navigateByUrl("User");
      alert("User Deleted");
    },
    error=>
    {
      console.log("error in deleting user",error);
    }
  );
}

}




