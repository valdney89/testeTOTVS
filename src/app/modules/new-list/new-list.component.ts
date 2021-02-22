import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ListService } from '../list/services/list.service';
import { List } from './../list/model/list';
import { SidebarService } from './../../core/sidebar/services/sidebar.service';

@Component({
  selector: 'todo-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  newListForm: FormGroup;
  list: List;

  constructor(
    private fb: FormBuilder,
    private listService: ListService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.newListForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  //Salva a nova lista no banco e redireciona posteriormente para a nova lista criada
  save() {
    this.list = this.buildList();
    this.listService.saveList(this.list).subscribe(
      (sucess) => {
        this.refreshSidemenu();
        setTimeout(() => {
          this.moveToNewList(sucess.id);
        }, 500);
      },
      (error) => console.log(error)
    );
  }

  public refreshSidemenu() {
    this.sidebarService.setRefresh(true);
  }

  //Cria uma instância do Model List e pega os dados preenchidos no form
  private buildList() {
    const title = this.newListForm.get('title').value;
    const list = new List();
    list.title = title;
    return list;
  }

  private moveToNewList(id) {
    this.router.navigateByUrl(`/list/${id}`);
  }
}
