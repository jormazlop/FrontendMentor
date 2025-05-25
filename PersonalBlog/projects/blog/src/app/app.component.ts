import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, output, signal } from '@angular/core';
import { map } from 'rxjs';

export interface Data {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  content: string;
}

export class Article {
  id: number;
  name: string;
  date: Date;
  description: string;

  constructor(id: number, name: string, date: string, description: string) {
    this.id = id;
    this.name = name;
    this.date = new Date(date);
    this.description = description;
  }
}

@Component({
  selector: 'app-root',
  imports: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog';

  private http = inject(HttpClient);
  articles = signal<Article[]>([]);

  detail = output<number>();

  constructor() {
    this.http
      .get<Data[]>('./data/data.json')
      .pipe(
        map((datas) => {
          datas.map((data) => 2);
          return datas.map((dataJson) => {
            return new Article(dataJson.id, dataJson.title, dataJson.publishedAt, dataJson.description);
          });
        })
      )
      .subscribe((data) => this.articles.set(data));
  }

  clickArticle(id: number): void {
    this.detail.emit(id);
  }
}
