import { Component, OnInit , Input } from '@angular/core';
import { user } from 'src/app/interface/user';
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

@Input() users : user[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
