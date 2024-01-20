import { Component } from '@angular/core';
import { RecipeImageComponent } from './recipe-image/recipe-image.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component';
import { RecipePreparationComponent } from './recipe-preparation/recipe-preparation.component';
import { RecipeIngredientsComponent } from './recipe-ingredients/recipe-ingredients.component';
import { RecipeInstructionsComponent } from './recipe-instructions/recipe-instructions.component';
import { RecipeDividerComponent } from './recipe-divider/recipe-divider.component';
import { RecipeNutritionComponent } from './recipe-nutrition/recipe-nutrition.component';

@Component({
  selector: 'app-recipe-container',
  standalone: true,
  imports: [
    RecipeImageComponent,
    RecipeTitleComponent,
    RecipePreparationComponent,
    RecipeIngredientsComponent,
    RecipeInstructionsComponent,
    RecipeDividerComponent,
    RecipeNutritionComponent
  ],
  templateUrl: './recipe-container.component.html',
  styleUrl: './recipe-container.component.scss',
})
export class RecipeContainerComponent {}
