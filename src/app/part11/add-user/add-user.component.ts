import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { user } from 'src/app/interface/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

@Output() onAddUserClicked = new EventEmitter<user[]>();

  users: user[] = [
    {
      email: 'a@a.com',
      password: '123',
      address: '1 khayam ave'
    },
    {
      email: 'b@b.com',
      password: '158',
      address: '3 sajad ave'
    },
    {
      email: 'c@c.com',
      password: '973',
      address: '7 maad ave'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

    // names in input of event are desire email can be em or password can be ps 
    public onAddUser(email: string, password: string, address: string, e: Event) {

      e.preventDefault();
      let u: user = {
        email: email,
        password: password,
        address: address
      };
      this.users.push(u);
      this.onAddUserClicked.emit(this.users);
    }
}
