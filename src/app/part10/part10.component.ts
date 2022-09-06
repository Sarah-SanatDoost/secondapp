import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part10',
  templateUrl: './part10.component.html',
  styleUrls: ['./part10.component.css']
})
export class Part10Component implements OnInit {

  ratings:number[]= [2 , 4.5 , 3 , 1.5 , 3.5];


  public onStarClicked(rating : number){
    console.log (`The Rating ${rating} Is Clicked!`)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
