import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Tasks } from './../model/tasks';

const API = environment.ApiUrl;

@Injectable({ providedIn: 'root' })
export class TasksService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Tasks[]>(`${API}/tasks`);
  }

  getTasksById(id) {
    return this.http.get<Tasks>(`${API}/tasks/${id}`);
  }

  getTasksByListId(id) {
    return this.http.get<Tasks[]>(`${API}/tasks/?listId=${id}`);
  }

  saveTasks(task: Tasks): Observable<Tasks> {
    return this.http
      .post<Tasks>(`${API}/tasks`, JSON.stringify(task), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateTasks(tasks: Tasks, id: number): Observable<Tasks> {
    return this.http
      .put<Tasks>(`${API}/tasks/${id}`, JSON.stringify(tasks), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  removeTasks(id: number) {
    return this.http
      .delete(`${API}/tasks/${id}`)
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
