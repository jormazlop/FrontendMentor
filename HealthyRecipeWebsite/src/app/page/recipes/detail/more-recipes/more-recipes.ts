import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'page/recipes/recipe.service';
import { RecipeCard } from 'page/recipes/recipes/recipe-card/recipe-card';

@Component({
  selector: 'app-more-recipes',
  imports: [RecipeCard],
  templateUrl: './more-recipes.html',
  styleUrl: './more-recipes.scss',
})
export class MoreRecipes {
  id = input();
  recipes = inject(Recipe).recipes;

  suggestions = computed(() =>
    this.recipes()
      .filter((rec) => rec.id != this.id())
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
  );

  private router = inject(Router);

  onViewRecipe(id: number): void {
    this.router.navigate(['../recipes', id]);
  }
}
