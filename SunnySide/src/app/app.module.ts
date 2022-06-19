import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { HeaderComponent } from './components/first-section/header/header.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { FourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { FifthSectionComponent } from './components/fifth-section/fifth-section.component';
import { SixthSectionComponent } from './components/sixth-section/sixth-section.component';
import { SeventhSectionComponent } from './components/seventh-section/seventh-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FirstSectionComponent,
    HeaderComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
    SixthSectionComponent,
    SeventhSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
