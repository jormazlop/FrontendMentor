import { Component, WritableSignal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Workflow } from '../workflow.component';

@Component({
  selector: 'app-workflow-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workflow-item.component.html',
  styleUrl: './workflow-item.component.scss'
})
export class WorkflowItemComponent {

  @Input() workflowItem!: Workflow;

}
