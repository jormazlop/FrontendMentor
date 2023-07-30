import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardLeftComponent } from './components/card/card-left/card-left.component';
import { CardRightComponent } from './components/card/card-right/card-right.component';
import { TitleDirective } from './shared/directive/title.directive';
import { UpperPipe } from './shared/pipe/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLeftComponent,
    CardRightComponent,
    TitleDirective,
    UpperPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
