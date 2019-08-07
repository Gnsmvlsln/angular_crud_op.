import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  arrayComment:any[];
  constructor(private http: HttpClient) { }

  // private url="https://jsonplaceholder.typicode.com/comments";
  private url="https://jsonplaceholder.typicode.com/comments?_start=0&_limit=10";

  getFeedbacks(){
    return this.http.get(this.url)
  }
  getComm(data){
    this.arrayComment=data;
  }

}
