import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  protected readonly toast = toast;

  save(): void {
    this.success('Note saved successfully!');
  }

  archive(): void {
    this.success('Note archived.');
  }

  delete(): void {
    this.success('Note permanently deleted.');
  }

  restore(): void {
    this.success('Note restored to active notes.');
  }

  change(): void {
    this.success('Password changed successfully!');
  }

  add(): void {
    this.success('Tag added successfully!');
  }

  remove(): void {
    this.success('Tag removed successfully!');
  }


  private success(message: string): void {
    this.toast.success(message, {
      class: 'toast'
    });
  }
}
