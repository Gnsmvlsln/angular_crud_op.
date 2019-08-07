import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserformComponent } from './userform/userform.component';
import { UserService } from './user.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldControl} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { SingleFeedbackComponent } from './single-feedback/single-feedback.component';
// import { AdminComponent } from './admin/admin.component';
// import { DealerModule } from './dealer/dealer.module';
// import {DemoMaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserformComponent,
    HomepageComponent,
    PageNotFoundComponent,
    // SingleFeedbackComponent,
    // AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    // DemoMaterialModule,
    // FormsModule,
    ReactiveFormsModule,
    // DealerModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
