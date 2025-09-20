import { TitleCasePipe } from '@angular/common';
import { Component, effect, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClickOutside } from '@shared/directives/click-outside';

@Component({
  selector: 'app-day-button',
  imports: [ClickOutside, FormsModule, TitleCasePipe],
  templateUrl: './day-button.html',
  styleUrl: './day-button.scss',
})
export class DayButton {
  open = signal(false);
  selectedDay = model('monday');

  clickDay = output<string>();

  dayList = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor() {
    effect(() => this.clickDay.emit(this.selectedDay()));
  }

  clickMenu(): void {
    this.open.update((val) => !val);
  }

  closeMenu(): void {
    this.open.set(false);
  }
}
