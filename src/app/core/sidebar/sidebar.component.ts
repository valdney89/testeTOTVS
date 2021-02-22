import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {
  faTasks,
  faPlusCircle,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { List } from './../../modules/list/model/list';
import { ListService } from './../../modules/list/services/list.service';

@Component({
  selector: 'todo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  listItens: List[];
  qtdListItens: number = 0;
  faTasks = faTasks;
  faPlusCircle = faPlusCircle;
  faHome = faHome;
  list$: Observable<any>;
  public isCollapsed = true;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    //obtem todas as listas do banco para popular menu
    this.list$ = this.listService.getList();
    this.list$.subscribe((sucess) => {
      this.qtdListItens = sucess.length;
      this.listItens = sucess;
    });
  }
}
