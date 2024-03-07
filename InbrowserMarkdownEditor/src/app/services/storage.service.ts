import { Injectable } from '@angular/core';
import { Document } from './documents.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private DATA_NAME = 'documents_markdown';

  setLocalStorage(documents: Document[]): void {
    localStorage.setItem(this.DATA_NAME, JSON.stringify(documents));
  }

  getLocalStorage(): Document[] | null {
    const documents = localStorage.getItem(this.DATA_NAME);
    return documents ? JSON.parse(documents) : null;
  }

}
