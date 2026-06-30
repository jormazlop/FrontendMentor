import { Service } from '@angular/core';
import { Favorite, LogConversion } from '@model/model';

@Service()
export class LocalStorage {

  private readonly FAVORITES_KEY = "foreign_favorites";
  private readonly LOGS_KEY = "foreign_logs";

  setFavoritesLocalStorage(data: Favorite[]): void {
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(data));
  }

  getFavoritesLocalStorage(): Favorite[] | null {
    const data = localStorage.getItem(this.FAVORITES_KEY);
    return data ? JSON.parse(data) : null;
  }

  setLogsLocalStorage(data: LogConversion[]): void {
    localStorage.setItem(this.LOGS_KEY, JSON.stringify(data));
  }

  getLogsLocalStorage(): LogConversion[] | null {
    const data = localStorage.getItem(this.LOGS_KEY);
    return data ? JSON.parse(data) : null;
  }
}
