import { computed, Service, signal } from '@angular/core';
import { LogConversion } from '@model/model';

@Service()
export class LogConversions {
  private readonly _logConversions = signal<LogConversion[]>([]);
  readonly logConversions = this._logConversions.asReadonly();

  private readonly maxId = computed(() => this._logConversions().length + 1);

  addLog(base: string, quote: string, baseValue: number, quoteValue: number): void {
    const logConversion: LogConversion = {
      base,
      quote,
      baseValue,
      quoteValue,
      date: new Date(),
      id: this.maxId(),
    };

    this._logConversions.update((logs) => {
      logs.push(logConversion);
      return [...logs];
    });
  }

  clearLog(id: number): void {

    this._logConversions.update((logs) => {
      const logsFiltered = logs.filter(log => log.id != id);
      return [...logsFiltered];
    });
  }

  clearAllLogs(): void {
    this._logConversions.set([]);
  }
}
