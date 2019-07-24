import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  userInput={
    name:"",
    uname:"",
    id:null
  }
  obj;

  constructor(private userservice: UserService,
              private router: Router)
               
  { }

  ngOnInit(){
    console.log('ooooo',this.userservice.dataToUpdate)
    this.userInput.name=this.userservice.dataToUpdate.updateName;
    this.userInput.uname=this.userservice.dataToUpdate.updateUname;
    this.userInput.id=this.userservice.dataToUpdate.id;
  }

  submitit(){
    this.userservice.compareUser(this.userInput);
  }

  onCreateUser(firstname: string,username:string){
    this.userservice.arrayForUserform(firstname,username)
  }
}
