import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ResponsiveIfDirective } from './directives/responsive-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardBodyComponent,
    ResponsiveIfDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
