import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part9',
  templateUrl: './part9.component.html',
  styleUrls: ['./part9.component.css']
})
export class Part9Component implements OnInit {

  constructor() { }

  iscorrect :boolean = false
  SwithPropery :string = 'b'

  users: string[] = ['sara' , 'safura' , 'ali' , 'nima']

  
  usersObj: any=[
  {
    id: 1,
    name: 'sara'
  },
  {
    id: 2,
    name: 'safura'
  },
  {
    id: 3,
    name: 'ali'
  },
  {
    id: 4,
    name: 'nima'
  }
]


public addNewUser (){
this.usersObj =[
  {
    id: 1,
    name: 'sara'
  },
  {
    id: 2,
    name: 'safura'
  },
  {
    id: 3,
    name: 'ali'
  },
  {
    id: 4,
    name: 'nima'
  },
  {
    id: 5,
    name: 'ahmad'
  }
]


}

public trackByFunc (index: number , el: any){
  return el.id
}

  ngOnInit(): void {
  }


}
