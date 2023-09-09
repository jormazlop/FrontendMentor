import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { NgOptimizedImage } from '@angular/common';
import { ResponsiveIfDirective } from './directives/responsive-if.directive';
import { FooterComponent } from './components/footer/footer.component';

import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HeaderComponent,
    ResponsiveIfDirective,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ResponsiveIfDirective
  ]
})
export class SharedModule { }
