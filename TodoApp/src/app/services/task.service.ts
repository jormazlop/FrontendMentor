import { Injectable, effect, inject, signal } from '@angular/core';
import { Task } from '../models/task';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private storageService = inject(StorageService);

  private tasks = signal<Task[]>([
    { id: 1, name: 'Task todo nº1', completed: false },
    { id: 2, name: 'Task todo nº2', completed: false },
    { id: 3, name: 'Task todo nº3', completed: false },
    { id: 4, name: 'Task todo nº4', completed: false },
  ]);

  readonly tasks$ = this.tasks.asReadonly();

  constructor() {
    const localTasks = this.storageService.getStorage();

    if (localTasks) {
      this.tasks.set(localTasks);
    }

    effect(() => {
      this.storageService.setStorage(this.tasks$())
    });
  }

  generateId(): number {
    if (!this.tasks().length) {
      return 1;
    }

    return (
      Math.max(
        ...this.tasks()
          .sort((a, b) => a.id - b.id)
          .map((task) => task.id)
      ) + 1
    );
  }

  addTask(task: Task): void {
    this.tasks.update((tasks) => {
      tasks.push(task);
      return [...tasks];
    });
  }

  changeCompletion(id: number): void {
    this.tasks.update((tasks) => {
      const task = tasks.find((t) => t.id == id);
      task!.completed = !task!.completed;
      return [...tasks];
    });
  }

  reorderTasks(tasks: Task[]): void {
    this.tasks.set(
      tasks
      .sort((a, b) => a.id - b.id)
      .map((task, index) => <Task>{ ...task, id: index + 1 })
    );
  }

  clearCompletedTasks(): void {
    this.tasks.update(tasks => tasks.filter(task => !task.completed));
    this.reorderTasks(this.tasks$());
  }
}
