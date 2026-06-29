import { Component, input, output } from '@angular/core';
import { IconCheck } from '@components/icons/icon-check/icon-check';

@Component({
  selector: 'foreign-log-button',
  imports: [IconCheck],
  templateUrl: './log-button.html',
  styleUrl: './log-button.scss',
})
export class LogButton {
  active = input(false);
  clickedLog = output();

  onClickedLog(): void {
    this.clickedLog.emit();
  }
}
