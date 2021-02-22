import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';

import { TasksService } from '../tasks/services/tasks.service';
import { ModalService } from '../../../../shared/components/modal/service/modal.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalConfig } from 'src/app/shared/components/modal/model/modal';
import { Tasks } from '../tasks/model/tasks';

@Component({
  selector: 'todo-modal-edit-tasks',
  templateUrl: './modal-edit-tasks.component.html',
})
export class ModalEditTasksComponent implements OnInit, OnDestroy {
  @ViewChild('modalEdit') private modalComponent: ModalComponent;

  @Input() modalConfig: ModalConfig;

  modalClickSubscription: Subscription;
  editTasksForm: FormGroup;
  task: Tasks;
  receiverTaskId: number;

  constructor(
    private modalService: ModalService,
    private tasksService: TasksService,
    private formBuilder: FormBuilder
  ) {
    this.modalClickSubscription = this.modalService
      .getEditModalClick()
      .subscribe((event) => {
        this.openModal();
        this.receiverTaskId = event;
        this.constroiForm();
      });
  }

  ngOnInit(): void {
    this.editTasksForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.modalClickSubscription.unsubscribe();
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

  constroiForm() {
    this.tasksService.getTasksById(this.receiverTaskId).subscribe(
      (task) => {
        this.task = task;
        this.editTasksForm.get('title').setValue(this.task.title);
        this.editTasksForm.get('description').setValue(this.task.description);
      },
      (error) => console.log(error)
    );
  }

  edit() {
    this.task.title = this.editTasksForm.get('title').value;
    this.task.description = this.editTasksForm.get('description').value;
    this.tasksService.updateTasks(this.task, this.task.id).subscribe(
      (sucess) => {
        console.log(sucess);
        this.refreshTasks();
        this.dismissModal();
      },
      (error) => console.log(error)
    );
  }

  private refreshTasks() {
    this.tasksService.setRefreshTasks(true);
  }
}
