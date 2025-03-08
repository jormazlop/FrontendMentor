import { DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateButtonComponent } from '@buttons/create-button/create-button.component';
import { PrimaryButtonComponent } from '@buttons/primary-button/primary-button.component';
import { Note } from '@models/note.model';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-sidebar-notes',
  imports: [
    PrimaryButtonComponent,
    RouterModule,
    DatePipe,
    CreateButtonComponent,
  ],
  templateUrl: './sidebar-notes.component.html',
  styleUrl: './sidebar-notes.component.scss',
})
export class SidebarNotesComponent {
  service = inject(NoteService);
  isArchived = input(false);
  notesList = input.required<Note[]>();

  onClickMenu(): void {
    if (window.innerWidth <= 992) {
      this.service.menu();
    }
  }
}
