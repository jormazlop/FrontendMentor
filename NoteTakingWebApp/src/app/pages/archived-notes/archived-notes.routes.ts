import { Routes } from '@angular/router';
import { ArchivedNotesComponent } from './archived-notes.component';
import { noteGuard } from '@guards/note.guard';
import { NoteComponent } from './note/note.component';

export const routes: Routes = [
  {
    path: '',
    component: ArchivedNotesComponent,
    children: [
      {
        path: 'note/:id',
        component: NoteComponent,
        canDeactivate: [noteGuard],
      },
    ],
  },
];
