import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part8Component } from './part8/part8.component';
import { Part9Component } from './part9/part9.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { SwitchCase1Component } from './part9/switch-case1/switch-case1.component';
import { SwitchCase2Component } from './part9/switch-case2/switch-case2.component';
import { SwitchCase3Component } from './part9/switch-case3/switch-case3.component';
import { Part10Component } from './part10/part10.component';
import { StarComponent } from './part10/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    Part8Component,
    Part9Component,
    SwitchCase1Component,
    SwitchCase2Component,
    SwitchCase3Component,
    Part10Component,
    StarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
