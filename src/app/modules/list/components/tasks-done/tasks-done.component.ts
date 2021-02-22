import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbAccordion, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { faEllipsisV, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Tasks } from './../tasks/model/tasks';

@Component({
  selector: 'todo-tasks-done',
  templateUrl: './tasks-done.component.html',
})
export class TasksDoneComponent implements OnInit {
  @ViewChild('acc') accordion: NgbAccordion;

  @Input() listTasks: Tasks;

  @Output() voltarTaskEmitter = new EventEmitter();
  @Output() excluirTaskEmitter = new EventEmitter();

  faEllipsisV = faEllipsisV;
  faChevronDown = faChevronDown;
  public isCollapsed = true;

  constructor(dropdownConfig: NgbDropdownConfig) {
    dropdownConfig.placement = 'bottom-right';
  }

  ngOnInit(): void {}

  clickVoltarTask(event) {
    event.isDone = false;
    this.voltarTaskEmitter.emit(event);
  }

  excluirTask(event) {
    this.excluirTaskEmitter.emit(event);
  }
}
