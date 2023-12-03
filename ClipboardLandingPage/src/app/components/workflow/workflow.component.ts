import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowItemComponent } from './workflow-item/workflow-item.component';

export type Workflow = {
  image: string,
  title: string,
  description: string
}

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [CommonModule, WorkflowItemComponent],
  templateUrl: './workflow.component.html',
  styleUrl: './workflow.component.scss'
})
export class WorkflowComponent {

  workflowsItems: WritableSignal<Workflow[]> = signal([
    {
      image: 'blacklist',
      title: 'Create blacklists',
      description: 'Ensure sensitive information never makes its way to your clipboard by excluding certain sources.'
    },
    {
      image: 'text',
      title: 'Plain text snippets',
      description: 'Remove unwanted formatting from copied text for a consistent look.'
    },
    {
      image: 'preview',
      title: 'Sneak preview',
      description: 'Quick preview of all snippets on your Clipboard for easy access.'
    }
  ])

}
