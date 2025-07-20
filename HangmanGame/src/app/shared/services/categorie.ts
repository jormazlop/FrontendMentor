import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Data } from '@shared/models/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private readonly http = inject(HttpClient);

  getData(): Observable<Data> {
    return this.http.get<Data>('categories/data.json');
  }
}
