import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface Data {
  title: string;
  slug: string;
  publishedAt: string;
  description: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private http = inject(HttpClient);

  constructor() {
    this.http.get<Data[]>('./data/data.json');
  }


}
