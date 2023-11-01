import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentImageComponent } from './components/content-image/content-image.component';
import { ContentAccordionComponent } from './components/content-accordion/content-accordion.component';
import { ResponsiveIfDirective } from './directives/responsive-if.directive';
import { AccordionComponent } from './components/content-accordion/accordion/accordion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentImageComponent,
    ContentAccordionComponent,
    ResponsiveIfDirective,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
