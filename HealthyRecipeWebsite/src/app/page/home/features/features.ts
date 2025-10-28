import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.html',
  styleUrl: './features.scss'
})
export class Features {

  features = [
    {
      image: 'icon-whole-food-recipes.svg',
      title: 'Whole-food recipes',
      description: 'Each dish uses everyday, unprocessed ingredients.'
    },
    {
      image: 'icon-minimum-fuss.svg',
      title: 'Minimum fuss',
      description: 'All recipes are designed to make eating healthy quick and easy.'
    },
    {
      image: 'icon-search-in-seconds.svg',
      title: 'Search in seconds',
      description: 'Filter by name or ingredient and jump straight to the recipe you need.'
    }
  ]
}
