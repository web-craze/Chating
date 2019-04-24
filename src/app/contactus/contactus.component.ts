import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
users:any[];
  constructor(db:AngularFireDatabase, afDb: AngularFireDatabase) {

db.list('/student').subscribe(users=>{
this.users=users;
console.log(this.users);
});

  }
  ngOnInit() {
  }

}
