import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  modalSubject: Subject<any> = new Subject<any>();
  editModalSubject: Subject<any> = new Subject<any>();

  constructor() {}

  getModalEmitter() {
    this.modalSubject.next();
  }

  getEditModalEmitter(taskId) {
    this.editModalSubject.next(taskId);
  }

  getModalClick() {
    return this.modalSubject.asObservable();
  }

  getEditModalClick() {
    return this.editModalSubject.asObservable();
  }
}
