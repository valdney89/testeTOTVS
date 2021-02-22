import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Tasks } from './components/tasks/model/tasks';
import { TasksService } from './components/tasks/services/tasks.service';
import { List } from './model/list';
import { ModalService } from 'src/app/shared/components/modal/service/modal.service';
import { ModalConfig } from 'src/app/shared/components/modal/model/modal';
import { ListService } from './services/list.service';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faTrash = faTrash;
  list: List;
  listTasks: Tasks[];
  listId: number;
  modalConfig: ModalConfig;
  inscricao: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService,
    private listService: ListService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    //resolver criado para pegar as tarefas da lista antes de iniciar o componente
    this.activatedRoute.params.subscribe((params) => {
      this.listId = params.id;
      this.recebeListId(this.listId);
      this.listTasks = this.activatedRoute.snapshot.data['listTasks'];
    });
  }

  //verifica se existe ou não itens concluídos
  public hasTasksDone() {
    const findTaskDone = this.listTasks?.find((val) => val.isDone === true);
    return findTaskDone ? true : false;
  }

  //verifica se todas as tarefas criadas estão concluídas
  public isAllDone() {
    const value = this.listTasks
      .map(function (e) {
        return e.isDone;
      })
      .indexOf(false);
    return value;
  }

  public configuraModal(title: string) {
    this.modalConfig = new ModalConfig();
    this.modalConfig.modalTitle = title;
  }

  //abre a modal para cadastro de uma nova tarefa
  public addNewTask() {
    this.configuraModal('Adicionar Task');
    this.modalService.getModalEmitter();
  }

  //abre modal para edição da tarefa selecionada
  public editarTask(taskId) {
    this.configuraModal('Editar Task');
    this.modalService.getEditModalEmitter(taskId);
  }

  //muda o status da tarefa para concluída ou não concluída
  public changeStatusTask(event) {
    this.tasksService.updateTasks(event, event.id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => console.log(error)
    );
  }

  //Exclui a tarefa selecionada
  //TODO: aparecer feedback para confirmar exclusão
  public excluirTask(event) {
    this.tasksService.removeTasks(event.id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //Exclui a Lista selecionada e suas tarefas em cascata
  //TODO: aparecer feedback para confirmar exclusão
  public excluirList() {
    this.listService.removeList(this.listId).subscribe(
      (res) => {
        console.log(res);
        this.returnHome();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /* Busca no banco a lista pelo ID informado,
  se a tarefa não existir, redireciona para o component not found */
  private recebeListId(id: number) {
    this.listService.getListById(id).subscribe(
      (list) => {
        this.list = list;
      },
      (error) => {
        console.log(error);
        this.router.navigate(['not-found']);
      }
    );
  }

  private returnHome() {
    this.router.navigateByUrl('home');
  }
}
