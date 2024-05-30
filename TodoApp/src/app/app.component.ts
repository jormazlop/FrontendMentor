import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ModeService } from './services/mode.service';
import { NgClass } from '@angular/common';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    HeaderComponent,
    InputTaskComponent,
    TasksListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'TodoApp';
  protected mode$ = inject(ModeService).mode$;
}
