import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseUrl } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class CleanuriService {

  private http = inject(HttpClient);


  shortenLink(url:string): Observable<ResponseUrl> {

    let fd = new FormData();
    fd.append('url', url);

    return this.http.post<ResponseUrl>('/api/v1/shorten', fd);
  }
}
