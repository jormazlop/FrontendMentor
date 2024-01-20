import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeContainerComponent } from './components/recipe-container/recipe-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RecipePage';
}
