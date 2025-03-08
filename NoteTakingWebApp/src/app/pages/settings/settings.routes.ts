import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ColorsComponent } from './colors/colors.component';
import { FontComponent } from './font/font.component';
import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: '',
        redirectTo: 'colors',
        pathMatch: 'full'
      },
      {
        path: 'colors',
        component: ColorsComponent,
      },
      {
        path: 'fonts',
        component: FontComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
    ],
  },
];
