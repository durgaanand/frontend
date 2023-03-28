import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../module/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  addFeedback(feedback:Feedback):Observable<any>{
    let url='http://localhost:8036/feedback/addfeedback'
    return this.http.post(url,feedback,{responseType:'text'});
  }

  getFeedbackByBusoperator(busoperator:number):Observable<any>{
    let url='http://localhost:8036/feedback/viewallfeedbackbybusoperator';
    return this.http.get(url+'/'+busoperator);
  }

  getFeedbackByRoutename(routename:string):Observable<any>{
    let url='http://localhost:8036/feedback/viewallfeedbackbyroutename';
    return this.http.get(url+'/'+routename);
  }
}
