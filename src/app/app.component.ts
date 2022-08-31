import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 username :string = ''

 public onUserNameInputChanged (e: Event){
  this.username = (<HTMLInputElement>e.target).value;
 }
}
