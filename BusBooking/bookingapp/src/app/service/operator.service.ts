import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../module/bus';
import { BusOperator } from '../module/bus-operator';
import { Busroute } from '../module/busroute';
import { Operator } from '../module/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http:HttpClient) { }

  addBus(b:Bus):Observable<any>
  {
    let url='http://localhost:8036/busoperator/addNewBus';
    return this.http.post(url,b,{responseType:'text'});
  }

  addBusOperator(bo:BusOperator):Observable<any>
  {
    let url='http://localhost:8036/busoperator/addNewBusOperator';
    return this.http.post(url,bo,{responseType:'text'});
  }
  addBusroute(br:Busroute):Observable<any>
  {
    let url='http://localhost:8036/busoperator/addNewBusRoute';
    return this.http.post(url,br,{responseType:'text'});
  }
  updatePassword(u:BusOperator):Observable<any>
  {
    let url='http://localhost:8036/busoperator/updatePassword';
    return this.http.put(url,u,{responseType:'text'});
  }
  getRevenueByBusRoute(routename:string):Observable<any>
  {
    let url='http://localhost:8036/busoperator/getrevenuebyroutename';
    return this.http.get(url+'/'+routename);
  }

  validateOperator(operator:BusOperator):Observable<any>{
    let url='http://localhost:8036/busoperator/validate';
    return this.http.put(url,operator);
  }

}
