import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BodyCardComponent } from './components/body-card/body-card.component';
import { LeftCardComponent } from './components/body-card/left-card/left-card.component';
import { RightCardComponent } from './components/body-card/right-card/right-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyCardComponent,
    LeftCardComponent,
    RightCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
