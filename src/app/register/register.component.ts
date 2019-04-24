import { Component, OnInit } from '@angular/core';
import { User1 } from '../user1';

import{ HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
loginlist:User1[]=[];


  addLoginUser(form){

      var user: User1;
      user=form.value;

      console.log(form.value);
this.loginlist.push(user);
  }

  facebook(fbapi){
    this.http.get('https://api.github.com/users/sharadinfo').subscribe(data=>{

      console.log(data);
    })

  }
  google(gapi){
    this.http.get('https://api.github.com/users/sharadinfo').subscribe(data=>{
      var gdata:User1;
      console.log(data);
      this.loginlist.push(gdata);
    })

  }
  constructor(private http: HttpClient) {

   }

  ngOnInit() {

  }


}
