import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users: any[]
  userinputt = {
    ffname: "",
    uuname: "",
    id: null
  }
  constructor(private userservice: UserService) {
    // console.log('stuck',this.userservice.userData)
    // const userData={name:this.userservice.userinput.name,username:this.userservice.userinput.uname,id:this.userservice.userinput.id}
    // this.userservice.addUser(userData)
    // .subscribe(response=>{
    //   this.check(response)
    //   console.log('big resp',response)
    //   this.users.splice(0,0,response);
    // })
  }
  check(rp) {
    return rp.id = this.userservice.userinput.id;
  }
  ngOnInit() {
    if (this.userservice.hasData()) {
      let data = this.userservice.getData();
      this.displaydata(data)
    } else {
      this.userservice.getUsers()
        .subscribe(response => {
          this.displaydata(response)
        })
    }
  }
  displaydata(response) {
    this.users = response;
    this.userservice.store(this.users);
    this.users = this.userservice.arrayAtservice;
  }
  onUpdate(userData) {
    this.userservice.updateUserData(userData)
  }

  onDelete(data) {
    this.userservice.delete(data.id)
      .subscribe(response => {
        const index = this.users.indexOf(data);
        this.users.splice(index, 1)
      })
  }
}
