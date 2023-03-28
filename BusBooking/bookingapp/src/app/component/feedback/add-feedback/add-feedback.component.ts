import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/module/feedback';
import { FeedbackService } from 'src/app/service/feedback.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {

  feedback:Feedback=new Feedback();
  constructor(private feedbackService:FeedbackService,private router:Router) { }

  ngOnInit(): void {
  }
  addFeedback()
  {
    this.feedbackService.addFeedback(this.feedback).subscribe(
      data=>
      {
        alert("feedback submitted");
        this.router.navigateByUrl("userhome");
      },
      error=>
      {
        console.log("error occured",error)
      }
    );
  }

}
