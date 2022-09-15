import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {


  @Output() starClick = new EventEmitter();
  @Input() rating: number = 4;

  width: number = 80;

  constructor() { }

  ngOnInit(): void {

    this.width = this.rating * 80 / 5;
  }


  // now every where that use onclick() , emit what in ()
  public onClick() {

    this.starClick.emit(this.rating);
  }
}
