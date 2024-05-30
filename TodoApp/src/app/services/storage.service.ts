import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private TASKS_KEY = "tasks";

  setStorage(tasks: Task[]): void {
    localStorage.setItem(this.TASKS_KEY, JSON.stringify(tasks));
  }

  getStorage(): Task[] | null {
    const tasks = JSON.parse(localStorage.getItem(this.TASKS_KEY) || null as any);
    return tasks;
  }

}
