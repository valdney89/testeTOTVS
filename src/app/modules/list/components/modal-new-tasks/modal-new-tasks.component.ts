import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { TasksService } from './../tasks/services/tasks.service';
import { ModalService } from './../../../../shared/components/modal/service/modal.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalConfig } from 'src/app/shared/components/modal/model/modal';
import { Tasks } from '../tasks/model/tasks';

@Component({
  selector: 'todo-modal-new-tasks',
  templateUrl: './modal-new-tasks.component.html',
  styleUrls: ['./modal-new-tasks.component.css'],
})
export class ModalNewTasksComponent implements OnInit {
  @ViewChild('modal') private modalComponent: ModalComponent;

  @Input() modalConfig: ModalConfig;
  @Input() listId: number;

  modalClickSubscription: Subscription;
  newTasksForm: FormGroup;
  task: Tasks;

  constructor(
    private modalService: ModalService,
    private tasksService: TasksService,
    private formBuilder: FormBuilder
  ) {
    this.modalClickSubscription = this.modalService
      .getModalClick()
      .subscribe(() => {
        this.openModal();
      });
  }

  ngOnInit(): void {
    this.newTasksForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.constroiTask();
  }

  openModal() {
    return this.modalComponent.open();
  }

  closeModal() {
    return this.modalComponent.close();
  }

  constroiTask() {
    this.task = new Tasks();
    this.task.title = this.newTasksForm.get('title').value;
    this.task.description = this.newTasksForm.get('description').value;
    this.task.listId = this.listId;
    this.task.isDone = false;
    console.log(this.task);
  }

  save() {
    console.log(this.task);
    this.constroiTask();
    console.log(this.task);
    this.tasksService.saveTasks(this.task).subscribe((sucess) => {
      console.log(sucess);
    });
  }
}
