import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { catchError } from 'rxjs/internal/operators/catchError';
import { map } from 'rxjs/internal/operators/map';

const routes = {
  users: () => '/users',
}

@Injectable({
  providedIn: 'root'
})
export class ExempleService {

  constructor(private httpClient: HttpClient) {}

  getUsers() {
      return this.httpClient.get(routes.users()).pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not load users :-('))
    );
    }
}
