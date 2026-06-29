import { Component, output } from '@angular/core';

@Component({
  selector: 'foreign-clear-log-button',
  imports: [],
  templateUrl: './clear-log-button.html',
  styleUrl: './clear-log-button.scss',
})
export class ClearLogButton {
  clickedClearLog = output();

  onClickedClearLog(): void {
    this.clickedClearLog.emit();
  }
}
