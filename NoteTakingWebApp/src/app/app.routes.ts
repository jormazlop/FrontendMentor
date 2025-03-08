import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'all-notes',
    title: 'All Notes',
    loadChildren: () =>
      import('./pages/all-notes/all-notes.routes').then((x) => x.routes),
  },
  {
    path: 'archived-notes',
    title: 'Archived Notes',
    loadChildren: () =>
      import('./pages/archived-notes/archived-notes.routes').then(
        (x) => x.routes
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((x) => x.routes),
  },
  {
    path: 'search/:search',
    title: function(params){
      return 'Showing results for: ' + params.params["search"];
    },
    loadChildren: () =>
      import('./pages/search/search.routes').then((x) => x.routes),
  },
  {
    path: 'settings',
    title: 'Settings',
    loadChildren: () =>
      import('./pages/settings/settings.routes').then((x) => x.routes),
  },
  {
    path: 'tags/:tag',
    title: function(params){
      return 'Notes Tagged: ' + params.params["tag"];
    },
    loadChildren: () =>
      import('./pages/tags/tags.routes').then((x) => x.routes),
  },
  { path: '**', redirectTo: 'all-notes' },
];
