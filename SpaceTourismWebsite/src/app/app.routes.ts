import { Routes } from '@angular/router';
import { dataResolver } from './services/data.resolver';
import HomeComponent from './page/home/home.component';
import DestinationComponent from './page/destination/destination.component';
import CrewComponent from './page/crew/crew.component';
import TechnologyComponent from './page/technology/technology.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'destination', component: DestinationComponent, resolve: {data: dataResolver} },
  { path: 'crew', component: CrewComponent, resolve: {data: dataResolver} },
  { path: 'technology', component: TechnologyComponent, resolve: {data: dataResolver} },
  { path: '**', redirectTo: 'home' }
];
