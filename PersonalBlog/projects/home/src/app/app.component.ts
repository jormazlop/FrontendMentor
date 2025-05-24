import { Component, output } from '@angular/core';
import { HomeIntroductionComponent } from './components/home-introduction/home-introduction.component';
import { HomeArticlesComponent } from './components/home-articles/home-articles.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HomeIntroductionComponent, HomeArticlesComponent]
})
export class AppComponent {
  title = 'home';

  articles = output();

  viewAllArticles(): void {
    this.articles.emit()
  }
}
