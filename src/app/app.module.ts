import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Service
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
