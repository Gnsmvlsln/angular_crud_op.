import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { Routes, RouterModule} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SingleFeedbackComponent } from '../single-feedback/single-feedback.component';

const FEEDBACK_ROUTES: Routes =[
  {
    path:'',
    component: FeedbackComponent
  },
   {
    path:':id',
    component:SingleFeedbackComponent
  }
 
]

@NgModule({
  declarations: [FeedbackComponent,SingleFeedbackComponent],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forChild(FEEDBACK_ROUTES)
  ]
})
export class FeedbackModule { }
