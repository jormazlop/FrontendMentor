import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode } from '@angular/core';
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

    const urlProxy = isDevMode() ? '/api/v1/shorten': 'https://cleanuri.com/api/v1/shorten';

    return this.http.post<ResponseUrl>(urlProxy, fd);
  }
}
