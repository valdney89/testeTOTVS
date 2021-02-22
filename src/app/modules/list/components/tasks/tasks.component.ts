import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Tasks } from './model/tasks';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [NgbDropdownConfig],
})
export class TasksComponent implements OnInit {
  @Input() task: Tasks;

  @Output() concluirTaskEmitter = new EventEmitter();
  @Output() excluirTaskEmitter = new EventEmitter();
  @Output() editarTaskEmitter = new EventEmitter();

  faEllipsisV = faEllipsisV;

  constructor(dropdownConfig: NgbDropdownConfig) {
    dropdownConfig.placement = 'bottom-right';
  }

  ngOnInit(): void {}

  clickConcluirTask() {
    this.task.isDone = true;
    this.concluirTaskEmitter.emit(this.task);
  }

  excluirTask() {
    this.excluirTaskEmitter.emit(this.task);
  }

  editarTask() {
    this.editarTaskEmitter.emit(this.task);
  }
}
