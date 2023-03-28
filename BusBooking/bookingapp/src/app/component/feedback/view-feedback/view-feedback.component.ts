import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/module/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService) { }
  
  busoperator:number=0;
  feedback:Feedback[]=[];
  
  feedbackFound: boolean = false;
  feedbackNotFound: boolean = false;
  ngOnInit(): void {
    
  }

  viewfeedback(){
    this.feedbackService.getFeedbackByBusoperator(this.busoperator).subscribe(data=>
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
