import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {


  @Input() rating: number = 4;
  width: number = 80;
 
  constructor() { }

  ngOnInit(): void {

    this.width = this.rating * 80 / 5;
  }

}
