import { Component, computed, inject, input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SidebarNotesComponent } from '@layout/sidebar-notes/sidebar-notes.component';
import { NoteService } from '@services/note.service';

@Component({
  selector: 'note-search',
  imports: [
    PageHeaderComponent,
    SidebarNotesComponent,
    MatSidenavModule,
    RouterModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  opened = inject(NoteService).opened;
  totalNotes = inject(NoteService).totalNotes;
  search = input<string>('');

  notesList = computed(() => {

    return this.totalNotes().filter(note => {
      if (note.body.toLowerCase().includes(this.search().toLowerCase())) {
        return true
      }

      if (note.tags.toString().toLowerCase().includes(this.search().toLowerCase())) {
        return true;
      }

      if(note.title.toLowerCase().includes(this.search().toLowerCase())) {
        return true;
      }
      return false;
    });
  });
}
