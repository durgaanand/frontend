import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../module/booking';
import { Passenger } from '../module/passenger';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  addBooking(bk:Booking):Observable<any>
  {
    let url = 'http://localhost:8036/OnlineBusBooking/booking/addBooking';
    return this.http.post(url,bk,{responseType:'text'});
  }

  getFeedbackByRoutename(routename:string):Observable<any>{
    let url='http://localhost:8036/feedback/viewallfeedbackbyroutename';
    return this.http.get(url+'/'+routename);
  }

  getBookingDetailsById(bookingId: number):Observable<any>{
    let url ='http://localhost:8036/OnlineBusBooking/booking/getBookingDetailsById';
    return this.http.get(url+'/'+bookingId);
  }

  deleteBooking(bookingId:number):Observable<any>{
    let url = 'http://localhost:8036/OnlineBusBooking/booking/deleteBooking';

    return this.http.delete(url+'/'+bookingId);
  }

  updateBookingById(booking:Booking):Observable<any>{
    let url ='http://localhost:8036/OnlineBusBooking/booking/updateBookingById';
    return this.http.put(url+'/'+booking.bookingId, booking, {responseType:'text'});
  }

  getAllBookingsByUsername(username:string):Observable<any>{
    let url ='http://localhost:8036/OnlineBusBooking/booking/getAllBookingsByUsername';
    return this.http.get(url+'/'+username);
  }

  addPassenger(pk:Passenger):Observable<any>{
    let url = 'http://localhost:8036/OnlineBusBooking/booking/addPassenger';
    return this.http.post(url,pk,{responseType:'text'});
  }
  getBusRoute(source:String):Observable<any>{
    let url='http://localhost:8036/OnlineBusBooking/booking/getBusRoute';
    return this.http.get(url+'/'+source);
  }
  findFare(seats:number,routename:String,busnumber:String):Observable<any>{
    let url='http://localhost:8036/OnlineBusBooking/booking/getFare';
    return this.http.get(url+'/'+seats+'/source/'+routename+'/busnumber/'+busnumber);
  }
}