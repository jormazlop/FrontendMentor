import { Component, input } from '@angular/core';
import { RecipeT } from '@shared/models/recipe';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.html',
  styleUrl: './description.scss'
})
export class Description {

  recipe = input.required<RecipeT>();
}
