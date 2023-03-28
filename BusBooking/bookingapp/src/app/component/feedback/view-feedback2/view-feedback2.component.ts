import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/module/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-view-feedback2',
  templateUrl: './view-feedback2.component.html',
  styleUrls: ['./view-feedback2.component.css']
})
export class ViewFeedback2Component implements OnInit {

  constructor(public feedbackService:FeedbackService) { }
  routename:string="";
  feedback:Feedback[]=[];
  feedbackFound: boolean = false;
  feedbackNotFound: boolean = false;

  ngOnInit(): void {
  }
  viewfeedback(){
    this.feedbackService.getFeedbackByRoutename(this.routename).subscribe(data=>
      {
        this.feedback=data;
        this.feedbackFound = true;
        this.feedbackNotFound = false;
      },
      err=>
      {
        alert(err.error);
        console.log("error occured",err.error);
        this.feedbackFound = false;
        this.feedbackNotFound = true;
      });
  }
}
