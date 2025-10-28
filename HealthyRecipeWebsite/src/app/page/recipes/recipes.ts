import { Component } from '@angular/core';
import { Title } from './title/title';
import { Filter } from './filter/filter';
import {Recipes as RecipesComponent} from './recipes/recipes';

@Component({
  selector: 'app-recipes',
  imports: [Title, Filter, RecipesComponent],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss'
})
export default class Recipes {

}
