import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftCardComponent } from './components/left-card/left-card.component';
import { RightCardComponent } from './components/right-card/right-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftCardComponent,
    RightCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
