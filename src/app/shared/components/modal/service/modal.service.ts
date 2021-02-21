import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ModalService {
  modalSubject: Subject<any> = new Subject<any>();

  constructor() {}

  getModalEmitter() {
    this.modalSubject.next();
  }

  getModalClick() {
    return this.modalSubject.asObservable();
  }
}
