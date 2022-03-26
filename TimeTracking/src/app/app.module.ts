import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeCardComponent } from './components/time-card/time-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimeCardDirectiveDirective } from './directives/time-card-directive.directive';
import { ProfilCardComponent } from './components/profil-card/profil-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeCardComponent,
    TimeCardDirectiveDirective,
    ProfilCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
