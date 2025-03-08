import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchNoteComponent } from './search-note/search-note.component';
import { noteGuard } from '@guards/note.guard';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'note/:id',
        component: SearchNoteComponent,
        canDeactivate: [noteGuard],
      },
    ],
  },
];
