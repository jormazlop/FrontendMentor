import { Component, HostListener, inject, model, signal } from '@angular/core';
import { CheckIconComponent } from '../check-icon/check-icon.component';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [CheckIconComponent, FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.scss',
})
export class InputTaskComponent {
  protected taskCompleted = signal(false);
  protected task = model('');
  private taskService = inject(TaskService);

  onClickTask(): void {
    this.taskCompleted.update((val) => !val);
  }

  @HostListener('document:keydown.enter')
  onKeydownEnter(): void {
    if (this.task()) {
      const task: Task = {
        id: this.taskService.generateId(),
        name: this.task(),
        completed: this.taskCompleted(),
      };
      this.taskService.addTask(task);
      this.task.set('');
      this.taskCompleted.set(false);
    }
  }
}
