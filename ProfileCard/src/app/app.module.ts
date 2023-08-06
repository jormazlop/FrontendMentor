import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

import { NgOptimizedImage } from '@angular/common';
import { SpacingDirective } from './directives/spacing.directive';
import { RotationDirective } from './directives/rotation.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SpacingDirective,
    RotationDirective
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
