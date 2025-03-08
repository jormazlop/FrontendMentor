import { Component, computed, inject, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '@layout/page-header/page-header.component';
import { SidebarNotesComponent } from '@layout/sidebar-notes/sidebar-notes.component';
import { NoteService } from '@services/note.service';
import { InputSearchComponent } from 'app/components/inputs/input-search/input-search.component';

@Component({
  selector: 'note-search',
  imports: [
    PageHeaderComponent,
    SidebarNotesComponent,
    MatSidenavModule,
    RouterModule,
    InputSearchComponent,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  opened = inject(NoteService).opened;
  totalNotes = inject(NoteService).totalNotes;
  search = input<string>('');

  searchControl = new FormControl('');

  notesList = computed(() => {

    return this.totalNotes().filter(note => {

      if(this.search() == "''") {
        this.searchControl.setValue('');
        return true
      }

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
