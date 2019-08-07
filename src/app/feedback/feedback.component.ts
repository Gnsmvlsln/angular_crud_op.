import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../feedback-service.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  comments={};
  singleData:any[];
  constructor(private feedbackservice : FeedbackServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.feedbackservice.getFeedbacks()
      .subscribe((data)=>{
        this.comments=data
        this.displayFeedback(this.comments)
        console.log('jjj',data);
      })
  }
  displayFeedback(data){
    this.singleData=data;
    this.feedbackservice.getComm(this.singleData)
    console.log('jjj',this.singleData);
  }

}
