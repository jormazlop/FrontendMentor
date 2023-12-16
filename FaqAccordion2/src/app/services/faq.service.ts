import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  expandedItem: WritableSignal<number> = signal(0);

  expandItem(item: number) {
    this.expandedItem.set(item);
  }
}
