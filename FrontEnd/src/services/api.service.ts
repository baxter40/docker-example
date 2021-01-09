import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from 'src/models/user';
import { catchError } from 'rxjs/operators/';
import { environment } from './../environments/environment';

@Injectable()
export class APIService
{

  private apiAddress = environment.apiUrl;
  private userAddress = this.apiAddress + "user/";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>
  {
    // console.log(this.userAddress + 'user');
    return this.httpClient.get<User[]>(this.userAddress + 'user')
      .pipe(
        catchError(this.handleError<User[]>('getUsers'))
      );
  }

  addUser(user: User): Observable<User>
  {
    return this.httpClient.post<User>(this.userAddress + 'AddUser', user, this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('addUser'))
      );
  }






  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T)
  {
    return (error: any): Observable<T> =>
    {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
