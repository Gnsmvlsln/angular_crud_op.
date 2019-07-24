import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrayAtservice: any[];
  userinput: User = {
    name: "",
    uname: "",
    id: 100
  }
  userData: User;
  dataToUpdate = {
    updateName: "",
    updateUname: "",
    id: null
  }
  //  num:12;
  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { 

  }

  getUsers() {
    return this.http.get(this.url)
  }

  store(details) {
    this.arrayAtservice = details;
    console.log('details', this.arrayAtservice)
  }
  
  hasData() {
    return this.arrayAtservice && this.arrayAtservice.length;
  }
  getData() {
    return this.arrayAtservice;
  }

  arrayForUserform(firstname: string, username: string) {
    const user: User = {
      id: this.getNewId(),
      name: firstname,
      username: username
    }
    this.arrayAtservice.push(user);
    // this.userinput.name = firstname;
    // this.userinput.uname = username;
    // this.userinput.id = this.userinput.id + 1;
    // this.userData={name:this.userinput.name,username:this.userinput.uname,id:this.userinput.id+1}
    // this.addUser(this.userData)

  }
  addUser(userData) {
    console.log('xxx', JSON.stringify(userData))
    console.log('damn it', this.http.post(this.url, userData))
    return this.http.post(this.url, userData)
  }

  updateUserData(userData) {
    console.log('something', userData)
    this.dataToUpdate.updateName = userData.name;
    this.dataToUpdate.updateUname = userData.username;
    this.dataToUpdate.id = userData.id;
    console.log('okoko', this.dataToUpdate)
  }
  compareUser(data) {
    console.log(data)
    // this.arrayAtservice.map(obj => {
    //   if (obj.id == data.id) {
    //     console.log('object id', obj.id, 'argument id', data.id)
    //     this.arrayAtservice[obj.id].name = data.name;
    //   }
    // })
    // console.log('type cheythath', data.name);
    // this.arrayAtservice.map(user=>data.id)
    // this.arrayAtservice.map(obj => data.id === obj.id);
    // console.log(console.log(this.arrayAtservice));
    const index = this.arrayAtservice.findIndex(obj => data.id == obj.id);
    this.arrayAtservice[index].name = data.name;
    this.arrayAtservice[index].username = data.uname;
    this.dataToUpdate = {
      updateName: "",
      updateUname: "",
      id: null
    }
  }

  delete(data) {
    return this.http.delete(this.url + '/' + data)
  }

  getNewId() {
    return (this.arrayAtservice[this.arrayAtservice.length - 1].id) + 1;
  }
}






