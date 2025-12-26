import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Difficulty, Mode } from '@shared/models/config.model';
import { Test, TestList } from '@shared/models/typing.model';

@Injectable({
  providedIn: 'root',
})
export class Typing {
  private readonly _testList = signal<TestList>(new TestList());
  private readonly http = inject(HttpClient);

  private readonly _difficulty = signal<Difficulty>('easy');
  readonly difficulty = this._difficulty.asReadonly();
  private readonly _mode = signal<Mode>('timed');
  readonly mode = this._mode.asReadonly();

  private readonly _accuracy = signal<number>(0);
  readonly accuracy = this._accuracy.asReadonly();

  private readonly _timer = signal<number>(0);
  readonly timer = this._timer.asReadonly();

  private worker: Worker = new Worker(new URL('./timer.worker', import.meta.url));

  readonly selectedTest = computed<Test | undefined>(() => {
    const tests: Test[] | undefined = this._testList()[this._difficulty()];
    return tests[Math.floor(Math.random() * tests.length)];
  });

  constructor() {
    this.getData();
  }

  setAccuracy(accuracy: number): void {
    this._accuracy.set(accuracy);
  }

  setDifficulty(difficulty: Difficulty): void {
    this._difficulty.set(difficulty);
  }

  setMode(mode: Mode): void {
    this._mode.set(mode);
  }

  startTimedTest(): void {
    this.worker = new Worker(new URL('./timer.worker', import.meta.url));
    this.worker.onmessage = ({ data }) => {
      this._timer.set(data);

      if (!this._timer()) {
        this.worker.terminate();
      }
    };
    this.worker.postMessage('timed');
  }

  stopTest(): void {
    this.worker.terminate();
  }

  getData(): void {
    const url = '../../../data/data.json';
    this.http.get<TestList>(url).subscribe((data) => this._testList.set(data));
  }
}
