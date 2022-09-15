import { Component, OnInit } from '@angular/core';
import { user } from '../interface/user';
@Component({
  selector: 'app-part11',
  templateUrl: './part11.component.html',
  styleUrls: ['./part11.component.css']
})
export class Part11Component implements OnInit {

  users: user[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public userAdded(users: user[]) {
    this.users = users
  }

}
