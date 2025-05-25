import { HttpClient } from '@angular/common/http';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  signal,
} from '@angular/core';
import { filter, map } from 'rxjs';

export interface Data {
  id: number;
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  content: string;
}

@Component({
  template:
    '<detail-page [content]="content()" [detailTitle]="title()"></detail-page>',
  styles: ':host {display: contents}',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class DetailComponent {
  private http = inject(HttpClient);

  id = input<string>('0');
  content = signal('');
  title = signal('');

  ngOnInit() {
    this.http
      .get<Data[]>('./data/data.json')
      .pipe(map((data) => data.find((d) => d.id == +this.id())))
      .subscribe((data) => {
        this.title.set(data?.title ?? '');
        this.content.set(data?.content ?? '');
      });
  }
}
