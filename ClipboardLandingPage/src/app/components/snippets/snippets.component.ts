import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-snippets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snippets.component.html',
  styleUrl: './snippets.component.scss'
})
export class SnippetsComponent {

  snippetList = signal([
    {
      title: 'Quick Search',
      description: 'Easily search your snippets by content, category, web address, application, and more.'
    },
    {
      title: 'iCloud Sync',
      description: 'Instantly saves and syncs snippets across all your devices.'
    },
    {
      title: 'Complete History',
      description: 'Retrieve any snippets from the first moment you started using the app.'
    }
  ])
}
