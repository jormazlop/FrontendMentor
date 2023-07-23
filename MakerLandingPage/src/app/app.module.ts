import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { InfoElementComponent } from './info/info-element/info-element.component';
import { PricingComponent } from './pricing/pricing.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    InfoElementComponent,
    PricingComponent,
    CapitalizePipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
