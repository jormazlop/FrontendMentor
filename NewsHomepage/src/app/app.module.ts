import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BodyComponentComponent } from './components/body-component/body-component.component';
import { OffcanvasModule } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    BodyComponentComponent
  ],
  imports: [
    BrowserModule,
    OffcanvasModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
