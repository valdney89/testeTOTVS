import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { TasksService } from '../components/tasks/services/tasks.service';
import { Tasks } from '../components/tasks/model/tasks';

@Injectable({ providedIn: 'root' })
export class TasksResolver implements Resolve<Observable<Tasks[]>> {
  constructor(private tasksService: TasksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tasks[]> {
    const list = new Tasks();
    list.id = route.params.id;
    return this.tasksService.getTasksByListId(list.id);
  }
}
