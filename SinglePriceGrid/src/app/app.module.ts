import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { JoinComponent } from './component/card/join/join.component';
import { MonthlyComponent } from './component/card/monthly/monthly.component';
import { WhyComponent } from './component/card/why/why.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    JoinComponent,
    MonthlyComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
