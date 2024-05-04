import { Component } from '@angular/core';
import { HomePresentationComponent } from './home-presentation/home-presentation.component';
import { HomeCollectionComponent } from './home-collection/home-collection.component';
import { HomeChooseUsComponent } from './home-choose-us/home-choose-us.component';
import { HomeHowItWorksComponent } from './home-how-it-works/home-how-it-works.component';

const components = [
  HomePresentationComponent,
  HomeCollectionComponent,
  HomeChooseUsComponent,
  HomeHowItWorksComponent
]


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [components],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
