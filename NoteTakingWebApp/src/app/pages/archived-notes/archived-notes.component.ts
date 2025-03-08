import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SidebarNotesComponent } from '@layout/sidebar-notes/sidebar-notes.component';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-archived-notes',
  imports: [
    PageHeaderComponent,
    SidebarNotesComponent,
    MatSidenavModule,
    RouterModule
  ],
  templateUrl: './archived-notes.component.html',
  styleUrl: './archived-notes.component.scss',
})
export class ArchivedNotesComponent {
  opened = inject(NoteService).opened;

  archived = inject(NoteService).archived;
}
