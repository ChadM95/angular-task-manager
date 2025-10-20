import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Body1Component } from './body1/body1.component';
import { Body2Component } from './body2/body2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Body1Component,
    Body2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
