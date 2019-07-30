import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserformComponent } from './userform/userform.component';
import { UsersComponent } from './users/users.component';
import { HomepageComponent } from './homepage/homepage.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
