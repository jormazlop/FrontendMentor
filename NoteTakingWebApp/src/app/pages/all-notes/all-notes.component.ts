import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SidebarNotesComponent } from '@layout/sidebar-notes/sidebar-notes.component';
import { RouterModule } from '@angular/router';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-all-notes',
  imports: [
    PageHeaderComponent,
    SidebarNotesComponent,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './all-notes.component.html',
  styleUrl: './all-notes.component.scss',
})
export class AllNotesComponent {
    opened = inject(NoteService).opened;

    notes = inject(NoteService).notes;
}
