import { Component, OnInit } from '@angular/core';
import { FeedbackServiceService } from '../feedback-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-feedback',
  templateUrl: './single-feedback.component.html',
  styleUrls: ['./single-feedback.component.css']
})
export class SingleFeedbackComponent implements OnInit {

  Data:{}
  constructor(private feedbackservice: FeedbackServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id=this.route.snapshot.params['id'];
    this.Data=this.feedbackservice.arrayComment[id-1]
  }

}
