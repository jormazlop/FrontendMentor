import { Component, effect, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'detail';

  detailTitle = input('');
  content = input('');

  constructor() {
    effect(() =>  console.log(this.content()))
  }

}
