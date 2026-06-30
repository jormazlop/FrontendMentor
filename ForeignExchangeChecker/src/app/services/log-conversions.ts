import { computed, effect, inject, Service, signal, untracked } from '@angular/core';
import { LogConversion } from '@model/model';
import { LocalStorage } from './local-storage';

@Service()
export class LogConversions {
  private readonly localStorage = inject(LocalStorage);

  private readonly _logConversions = signal<LogConversion[]>([]);
  readonly logConversions = this._logConversions.asReadonly();

  private readonly maxId = computed(() => this._logConversions().length + 1);

  constructor() {
    const existingLogs = this.localStorage.getLogsLocalStorage();

    this._logConversions.set(existingLogs ?? []);

    effect(() => {
      const logs = this._logConversions();

      untracked(() => {
        this.localStorage.setLogsLocalStorage(logs);
      });
    });
  }

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
      const logsFiltered = logs.filter((log) => log.id != id);
      return [...logsFiltered];
    });
  }

  clearAllLogs(): void {
    this._logConversions.set([]);
  }
}
