import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SucessMsgComponent } from './sucess-msg/sucess-msg.component';
import { WorningMsgComponent } from './worning-msg/worning-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessMsgComponent,
    WorningMsgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
