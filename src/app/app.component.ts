import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {AngularFireDatabase } from 'angularfire2/database';
interface UsersData{

  login: string,
  name:string,
  bio:string,
  id: number,
  location: string,
  avatar_url:string,
  emails_url:string,

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Login Here';
    users:any[];
  constructor(private http: HttpClient){


  }

  





  ngOnInit(): void{
this.http.get<UsersData>('https://api.github.com/users/sharadinfo').subscribe(data=>{
  console.log("user Login "+data.login);
  console.log("user name "+data.name);
  console.log("user Bio "+data.bio);
  console.log("user location "+data.location);
  console.log("user id "+data.id);
  console.log("user profile"+data.avatar_url);
  console.log("user email"+data.emails_url);
this.http.get('https://api.github.com/users/sharadinfo').subscribe(data=>{

  console.log(data);
})


})

const req= this.http.post('https://jsonplaceholder.typicode.com/posts',{

  title: 'welcome to json fake api',
  body:'my name is sharad rokade, i am web application developer',
  userId:2
}).subscribe(
  res=>{
    console.log(res);
},
err=>{
  console.log("error occured");
}
)
const req1= this.http.post('https://jsonplaceholder.typicode.com/albums',
{
  userId: 25,
      title: 'i am superstar'
}).subscribe(res=>{
  console.log(res);
})

  }

}
