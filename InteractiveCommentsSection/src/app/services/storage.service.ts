import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly localVar = 'comments';

  setStorage(data: Comment[]): void {
    localStorage.setItem(this.localVar, JSON.stringify(data));
  }

  getStorage(): Comment[] | null {
    const comments = localStorage.getItem(this.localVar);

    if(comments) {
      return JSON.parse(comments);
    }
    return null;
  }
}
