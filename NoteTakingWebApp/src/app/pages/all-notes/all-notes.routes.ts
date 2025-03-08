import { Routes } from '@angular/router';
import { AllNotesComponent } from './all-notes.component';
import { NoteComponent } from './note/note.component';
import { noteGuard } from '@guards/note.guard';

export const routes: Routes = [
  {
    path: '',
    component: AllNotesComponent,
    children: [
      {
        path: 'note/:id',
        component: NoteComponent,
        canDeactivate: [noteGuard],
      },
    ],
  },
];
