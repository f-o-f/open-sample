import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ){}

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.url}/login`)
      .pipe(
        catchError(this.handleError<User>(`getUser`))
      );
  }

  postUser(user: User):Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user)
      .pipe(
        catchError(this.handleError<User>(`postUser`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
