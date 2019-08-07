import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';
import { Routes , RouterModule} from '@angular/router';

const DEALERS_ROUTES: Routes = [
  {
    path:'',
    component: DealerComponent
  }
 

]

@NgModule({
  declarations: [DealerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DEALERS_ROUTES)
  ]
})
export class DealerModule { }
