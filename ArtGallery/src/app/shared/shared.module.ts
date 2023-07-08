import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { IconDirective } from './directives/icon.directive';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    IconDirective
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
