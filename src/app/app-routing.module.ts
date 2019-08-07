import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { UsersComponent } from './users/users.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomPreloadingService } from './custom-preloading.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleFeedbackComponent } from './single-feedback/single-feedback.component'

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'user_form',
    component: UserformComponent
  },
  {
    path:'dealers',
    data:{preload:true},
    loadChildren:'./dealer/dealer.module#DealerModule'
  },
  {
    path:'feedback',
    loadChildren:'./feedback/feedback.module#FeedbackModule',
  },
  { path:'not-found', component:PageNotFoundComponent },
  { path:'**', redirectTo:'/not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
