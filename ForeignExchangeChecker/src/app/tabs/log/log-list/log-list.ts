import { Component, inject } from '@angular/core';
import { RemoveButton } from '@components/buttons/remove-button/remove-button';
import { IconArrowRight } from '@components/icons/icon-arrow-right/icon-arrow-right';
import { DateAgoPipe } from '@pipes/date-ago-pipe';
import { LogConversions } from '@services/log-conversions';

@Component({
  selector: 'foreign-log-list',
  imports: [IconArrowRight, DateAgoPipe, RemoveButton],
  templateUrl: './log-list.html',
  styleUrl: './log-list.scss',
})
export class LogList {
  private readonly logConversions = inject(LogConversions);
  logs = this.logConversions.logConversions;

  onClickRemove(id: number): void {
    this.logConversions.clearLog(id);
  }
}
