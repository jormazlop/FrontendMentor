import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchUser(user:string): Observable<User> {
    const url = `https://api.github.com/users/${user}`;
    return this.http.get<User>(url);
  }
}
