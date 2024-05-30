import { Component, computed, effect, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CheckIconComponent } from '../check-icon/check-icon.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { ModeService } from '../../services/mode.service';
import { NgClass } from '@angular/common';
import { Task } from '../../models/task';

type FilterOption = 'all' | 'active' | 'completed';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [CheckIconComponent, CdkDropList, CdkDrag, NgClass],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

  mode$ = inject(ModeService).mode$;

  private taskService = inject(TaskService);

  tasks$ = computed(() => this.taskService.tasks$().filter(task => {
    switch(this.filter()) {
      case 'all':
        return true;
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
    }
  }))

  // tasks$ = this.taskService.tasks$;

  filter = signal<FilterOption>('all');

  onClickTask(id: number): void {
    this.taskService.changeCompletion(id);
  }

  drop(event: CdkDragDrop<Task[]>) {

    const tasks = this.taskService.tasks$;

    const previousTask = this.tasks$()[event.previousIndex];
    const currentTask = this.tasks$()[event.currentIndex];

    const previousId = previousTask.id;
    const currentId = currentTask.id;

    if(previousId < currentId) {

      tasks()[previousId - 1].id = tasks()[currentId - 1].id + 1;

      let index = previousId - 1;

      while(index < currentId) {
        tasks()[index].id--;
        index++;
      }

    }

    if(previousId > currentId) {

      tasks()[previousId - 1].id = tasks()[currentId - 1].id - 1;

      let index = currentId - 1;

      while(index < previousId) {
        tasks()[index].id++;
        index++;
      }

    }

    this.taskService.reorderTasks(tasks());
  }

  onClickFilter(filter: FilterOption): void {
    this.filter.set(filter);
  }

  onClickClear(): void {
    this.taskService.clearCompletedTasks();
  }
}
