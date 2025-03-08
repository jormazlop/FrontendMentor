import { Component, computed, inject, input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SidebarNotesComponent } from '@layout/sidebar-notes/sidebar-notes.component';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-tags',
  imports: [
    PageHeaderComponent,
    SidebarNotesComponent,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
})
export class TagsComponent {
  opened = inject(NoteService).opened;
  totalNotes = inject(NoteService).totalNotes;
  tag = input<string>('');

  notesList = computed(() => this.totalNotes().filter(note => note.tags.includes(this.tag())));

}
