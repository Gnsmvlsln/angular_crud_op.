import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  arrayAtservice:any[];
  userinput={
    name:"",
    uname:"",
    id:100
  }
   userData;
   dataToUpdate={
     updateName:"",
     updateUname:"",
     id:null
   }
  //  num:12;
    private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url)
  }

  store(details){
    this.arrayAtservice=details;
    console.log('details',this.arrayAtservice)
  }
  hasData(){
    return this.arrayAtservice && this.arrayAtservice.length;
  }
  getData(){
    return this.arrayAtservice;
  }

  arrayForUserform(firstname:string,username:string){
    this.userinput.name=firstname;
    this.userinput.uname=username;
    this.userinput.id=this.userinput.id+1;
    // this.userData={name:this.userinput.name,username:this.userinput.uname,id:this.userinput.id+1}
    // this.addUser(this.userData)
  }
  addUser(userData){
    console.log('xxx',JSON.stringify(userData))
    console.log('damn it',this.http.post(this.url,userData))
    return this.http.post(this.url,userData)
  }

  updateUserData(userData){
    console.log('something',userData)
    this.dataToUpdate.updateName = userData.name;
    this.dataToUpdate.updateUname = userData.username;
    this.dataToUpdate.id = userData.id;
    console.log('okoko',this.dataToUpdate)
  }
  compareUser(data)
  {
    this.arrayAtservice.map(obj=>{
      if(obj.id==data.id){
        debugger
        console.log('object id',obj.id,'argument id',data.id)
        this.arrayAtservice[obj.id].name=data.name;
      }
    })
        console.log('type cheythath',data.name);
  }

  delete(data){
    return this.http.delete(this.url + '/' + data)
  }
}
  

  
    
  

