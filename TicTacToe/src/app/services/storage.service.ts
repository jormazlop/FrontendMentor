import { Injectable } from '@angular/core';
import { GameData } from '../models/game';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private TIC_TAC_TOE_DATA = 'TIC_TAC_TOE_DATA';

  setStorage(data: GameData): void {
    localStorage.setItem(this.TIC_TAC_TOE_DATA, JSON.stringify(data));
  }

  getStorage(): GameData | null {
    const data = localStorage.getItem(this.TIC_TAC_TOE_DATA);
    return data ? JSON.parse(data) : null;
  }

}
