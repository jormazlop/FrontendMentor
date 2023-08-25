import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    HeaderComponent,
    CalendarComponent
  ]
})
export class SharedModule { }
