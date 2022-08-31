import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part8',
  templateUrl: './part8.component.html',
  styleUrls: ['./part8.component.css']
})
export class Part8Component implements OnInit {

  constructor() { }

  ismodified : boolean = true;
  iscancelled : boolean = true;

  classes = {}

  ngOnInit(): void {

    this.classes = {
      'modify' : this.ismodified,
      'cancel' : this.iscancelled
    }
  }

}
