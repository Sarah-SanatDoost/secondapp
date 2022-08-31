import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
username: string = '';
password: string = '';
retypePassword: string = '';
isPasswordMatch: boolean = false

public OnUserNameInputChanged (e:Event){
  this.username = (<HTMLInputElement>e.target).value
}

public OnPasswordInputChanged (e:Event){
  this.password = (<HTMLInputElement>e.target).value
}

public OnRetypePasswordChanged (e:Event){
  this.retypePassword =(<HTMLInputElement> e.target).value
//   if (this.password === this.retypePassword){
// this.isPasswordMatch = true
//   }
//   else{
//     this.isPasswordMatch = false
//   }

  this.isPasswordMatch = this.password === this.retypePassword ? true : false;
}
}
