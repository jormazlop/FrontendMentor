import { Component, inject } from '@angular/core';
import { RecipeCard } from './recipe-card/recipe-card';
import { Recipe } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-body',
  imports: [RecipeCard],
  templateUrl: './recipes.html',
  styleUrl: './recipes.scss'
})
export class Recipes {

  private router = inject(Router);
  recipes = inject(Recipe).recipes;

  onViewRecipe(id: number): void {
    this.router.navigate(['./recipes', id]);
  }
}
