import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '@shared/components/button/button';
import { RecipeT } from '@shared/models/recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [Button],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss'
})
export class RecipeCard {

  viewRecipe = output<number>();
  recipe = input.required<RecipeT>();

  onViewRecipe(): void {
    this.viewRecipe.emit(this.recipe().id);
  }
}
