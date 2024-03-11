import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import GameSelectionComponent from './pages/game-selection/game-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TicTacToe';
}
