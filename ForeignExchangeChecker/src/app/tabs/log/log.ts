import { Component, inject } from '@angular/core';
import { ClearLogButton } from '@components/buttons/clear-log-button/clear-log-button';
import { LogConversions } from '@services/log-conversions';
import { LogList } from './log-list/log-list';

@Component({
  selector: 'foreign-log',
  imports: [ClearLogButton, LogList],
  templateUrl: './log.html',
  styleUrl: './log.scss',
})
export default class Log {
  private readonly logConversions = inject(LogConversions);
  logs = this.logConversions.logConversions;

  onClickClearAllLogs(): void {
    this.logConversions.clearAllLogs();
  }
}
