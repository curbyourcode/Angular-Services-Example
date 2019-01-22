import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Service
import { DataService } from './data.service';

// material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
MatButtonModule,
MatCheckboxModule,
MatToolbarModule,
MatListModule
} from '@angular/material';

import { ToolBarComponent } from './tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
