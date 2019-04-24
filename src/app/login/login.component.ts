import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: User[]=[];
addUser(form){
  var user: User;
  user=form.value;
  console.log(form.value);
this.userList.push(user);


}
  constructor() { }

  ngOnInit() {
  }

}
