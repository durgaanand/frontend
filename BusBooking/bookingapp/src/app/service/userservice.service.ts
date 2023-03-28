import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../module/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
  addUser(user:User):Observable<any>
  {
    let url ='http://localhost:8036/user/userapi';
    return this.http.post(url,user,{responseType:'text'});
  }
  deleteUser(user:User["username"]):Observable<any>
  {
    let url ='http://localhost:8036/user/delete';
    return this.http.delete(url +"/" +user);
  }
  updatePassword(user:User):Observable<any>
  {
    let url ='http://localhost:8036/user/updatePass/';
  return this.http.put(url,user,{responseType:'text'});
  }
  validateUser(user:User):Observable<any>{
    let url='http://localhost:8036/user/validate';
    return this.http.put(url,user);
  }
}
