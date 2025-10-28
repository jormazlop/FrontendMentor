import { Component, computed, inject, input } from '@angular/core';
import { Recipe } from '../recipe.service';
import { Description } from './description/description';
import { RecipeT } from '@shared/models/recipe';
import { Separator } from '@shared/components/separator/separator';
import { MoreRecipes } from './more-recipes/more-recipes';

@Component({
  selector: 'app-detail',
  imports: [Description, Separator, MoreRecipes],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class Detail {

  id = input();
  recipes = inject(Recipe).recipes;

  detail = computed<RecipeT>(() => this.recipes().find(rec => rec.id == this.id())!);
}
