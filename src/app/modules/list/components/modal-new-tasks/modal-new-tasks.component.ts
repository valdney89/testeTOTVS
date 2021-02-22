import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  EventEmitter,
  Component,
  OnInit,
  ViewChild,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

import { TasksService } from './../tasks/services/tasks.service';
import { ModalService } from './../../../../shared/components/modal/service/modal.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalConfig } from 'src/app/shared/components/modal/model/modal';
import { Tasks } from '../tasks/model/tasks';

@Component({
  selector: 'todo-modal-new-tasks',
  templateUrl: './modal-new-tasks.component.html',
  styleUrls: ['./modal-new-tasks.component.scss'],
})
export class ModalNewTasksComponent implements OnInit, OnDestroy {
  @ViewChild('modal') private modalComponent: ModalComponent;

  @Input() modalConfig: ModalConfig;
  @Input() listId: number;

  @Output() saveEmitter = new EventEmitter();

  modalClickSubscription: Subscription;
  newTasksForm: FormGroup;
  task: Tasks;

  constructor(
    private modalService: ModalService,
    private tasksService: TasksService,
    private formBuilder: FormBuilder
  ) {
    this.modalClickSubscription = this.modalService.getModalClick().subscribe(
      () => {
        this.newTasksForm.reset();
        this.openModal();
      },
      (error) => console.log(error)
    );
  }
  ngOnDestroy(): void {
    this.modalClickSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.newTasksForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.buildTask();
  }

  openModal() {
    return this.modalComponent.open();
  }

  closeModal() {
    return this.modalComponent.close();
  }

  dismissModal() {
    return this.modalComponent.dismiss();
  }

  buildTask() {
    this.task = new Tasks();
    this.task.title = this.newTasksForm.get('title').value;
    this.task.description = this.newTasksForm.get('description').value;
    this.task.listId = this.listId;
    this.task.isDone = false;
  }

  save() {
    this.buildTask();
    this.tasksService.saveTasks(this.task).subscribe(
      (sucess) => {
        this.saveEmitter.emit(sucess);
        this.dismissModal();
      },
      (error) => console.log(error)
    );
  }
}
