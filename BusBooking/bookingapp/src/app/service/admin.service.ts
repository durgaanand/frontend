import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../module/admin';
import { Busroute } from '../module/busroute';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  addAdmin(admin:Admin):Observable<any>{
    let url='http://localhost:8036/OnlineBusBooking/admin/addAdmin';
    return this.http.post(url,admin,{responseType:'text'});
  }
  getRevenueByRoutename(routename:string):Observable<any>{
    let url='http://localhost:8036/OnlineBusBooking/admin/getRevenueByBusRoute';
    return this.http.get(url+'/'+routename);
  }
  updateBusRoute(busroute:Busroute):Observable<any>{
  let url = 'http://localhost:8036/OnlineBusBooking/admin/updateRouteName';
  return this.http.put(url,busroute,{ responseType: 'text' })  
  }
  validateAdmin(admin:Admin):Observable<any>{
    let url='http://localhost:8036/OnlineBusBooking/admin/validateAdmin';
    return this.http.put(url,admin);
  }
  getAllBookings():Observable<any>
  {
    let url='http://localhost:8036/OnlineBusBooking/admin/getAllBookings';
    return this.http.get(url);
  }

  getAllBusOperators():Observable<any>
  {
    let url='http://localhost:8036/OnlineBusBooking/admin/getAllBusOperators';
    return this.http.get(url);
  }

  deleteBusOperator(busOperatorUserName:string):Observable<any>{
    let url = 'http://localhost:8036/OnlineBusBooking/admin/deleteBusByOperator';

    return this.http.delete(url+'/'+busOperatorUserName);
  }

  getAllUsers():Observable<any>
  {
    let url='http://localhost:8036/OnlineBusBooking/admin/getAllUsers';
    return this.http.get(url);
  }

  deleteUser(userId:number):Observable<any>{
    let url = 'http://localhost:8036/OnlineBusBooking/admin/deleteUser';

    return this.http.delete(url+'/'+userId);
  }
}
