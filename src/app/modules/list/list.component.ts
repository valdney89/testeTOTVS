import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Tasks } from './components/tasks/model/tasks';
import { TasksService } from './components/tasks/services/tasks.service';
import { List } from './model/list';
import { ModalService } from 'src/app/shared/components/modal/service/modal.service';
import { ModalConfig } from 'src/app/shared/components/modal/model/modal';
import { ListService } from './services/list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  list: List;
  listTasks: Tasks[];
  listId: number;
  modalConfig: ModalConfig;

  constructor(
    private activedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private listService: ListService,
    private modalService: ModalService
  ) {
    this.configuraModal();
  }

  ngOnInit(): void {
    this.listId = this.activedRoute.snapshot.params.id;
    this.recebeListId(this.listId);
    this.recebeTasksByListId(this.listId);

    setTimeout(() => {
      console.log(this.listTasks);
    }, 500);
  }

  public configuraModal() {
    this.modalConfig = new ModalConfig();
    this.modalConfig.modalTitle = 'Adicionar nova Task';
  }

  public addNewTask() {
    this.modalService.getModalEmitter();
  }

  private recebeListId(id: number) {
    this.listService.getListById(id).subscribe(
      (list) => {
        this.list = list;
        console.log(list);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private recebeTasksByListId(id: number) {
    this.tasksService.getTasksByListId(id).subscribe(
      (tasks) => {
        this.listTasks = tasks;
        console.log(tasks);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
