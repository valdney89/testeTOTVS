import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { List } from '../model/list';
import { environment } from 'src/environments/environment';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class ListService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<List[]>(`${API}/lists`);
  }

  getListById(id) {
    return this.http.get<List>(`${API}/lists/${id}`);
  }

  saveList(list: List): Observable<List> {
    return this.http
      .post<List>(`${API}/lists`, JSON.stringify(list), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateList(list: List, id: number): Observable<List> {
    return this.http
      .put<List>(`${API}/lists/${id}`, JSON.stringify(list), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  removeList(id: number) {
    return this.http
      .delete(`${API}/lists/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
