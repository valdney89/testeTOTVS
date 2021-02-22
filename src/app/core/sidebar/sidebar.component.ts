import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {
  faTasks,
  faPlusCircle,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { List } from './../../modules/list/model/list';
import { ListService } from './../../modules/list/services/list.service';
import { SidebarService } from './services/sidebar.service';

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
  screenWidth: number;

  public isCollapsed = true;

  constructor(
    private listService: ListService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    //obtem todas as listas do banco para popular menu
    this.loadListItens();
    this.sidebarService.getRefresh().subscribe((value: boolean) => {
      if (value) {
        this.loadListItens();
      }
    });
    this.screenWidth = window.innerWidth;
  }

  closeAccordionOnMobile() {
    if (this.screenWidth < 768) {
      this.isCollapsed = true;
    }
  }

  private loadListItens() {
    this.listService.getList().subscribe((sucess) => {
      this.qtdListItens = sucess.length;
      this.listItens = sucess;
    });
  }
}
