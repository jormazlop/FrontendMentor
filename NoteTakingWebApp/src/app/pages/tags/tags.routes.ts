import { Routes } from '@angular/router';
import { TagsComponent } from './tags.component';
import { TagComponent } from './tag/tag.component';
import { noteGuard } from '@guards/note.guard';

export const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    children: [
      {
        path: 'note/:id',
        component: TagComponent,
        canDeactivate: [noteGuard],
      },
    ],
  },
];
