import { Injectable, effect, inject, signal } from '@angular/core';
import { GameData, GameResults, Mark } from '../models/game';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private dataGame = {} as GameData;

  private playerMark = signal<Mark>('x');
  playerMark$ = this.playerMark.asReadonly();

  private turn = signal<Mark>('x');
  turn$ = this.turn.asReadonly();

  private data = signal<GameData>({...this.dataGame});
  readonly data$ = this.data.asReadonly();

  private storageService = inject(StorageService);

  private loading = signal(false);
  readonly loading$ = this.loading.asReadonly();

  constructor() {

    const storageData = this.storageService.getStorage();

    if(storageData) {
      this.data.set({...storageData});
      this.dataGame = {...storageData};
    } else {
      this.initData();
    }

    effect(() => {
      this.storageService.setStorage(this.data$());
    });
  }

  initData(): void {
    this.dataGame = {
      results: {
        bluePlayer: 'NONE',
        blueTotal: 0,
        silverTotal: 0,
        yellowPlayer: 'NONE',
        yellowTotal: 0,
      },
      boxes: [
        { id: 0, value: '' },
        { id: 1, value: '' },
        { id: 2, value: '' },
        { id: 3, value: '' },
        { id: 4, value: '' },
        { id: 5, value: '' },
        { id: 6, value: '' },
        { id: 7, value: '' },
        { id: 8, value: '' },
      ],
    };
    this.data.set({...this.dataGame});
  }

  initBoxes(): void {
    this.dataGame.boxes = [
      { id: 0, value: '' },
      { id: 1, value: '' },
      { id: 2, value: '' },
      { id: 3, value: '' },
      { id: 4, value: '' },
      { id: 5, value: '' },
      { id: 6, value: '' },
      { id: 7, value: '' },
      { id: 8, value: '' },
    ];

    this.turn.set('x');
    this.data.set({...this.dataGame});
  }

  setResults(results: GameResults): void {
    this.dataGame.results = results;
    this.data.set({...this.dataGame});
  }

  checkBox(id: number, value: Mark): void {
    this.dataGame.boxes[id] = { id: id, value: value };
    this.data.set({...this.dataGame});
  }

  setPlayerMark(mark: Mark): void {
    this.playerMark.set(mark);
  }

  changeTurn(): void {
    this.turn.update((t) => (t === 'x' ? 'o' : 'x'));
  }

  setTurn(turn: 'x' | 'o'): void {
    this.turn.set(turn);
  }

  changeLoading(): void {
    this.loading.update(v => !v);
  }
}

