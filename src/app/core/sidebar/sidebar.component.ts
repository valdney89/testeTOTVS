import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { faTasks, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { List } from './../../modules/list/model/list';
import { ListService } from './../../modules/list/services/list.service';
import { ActivatedRoute } from '@angular/router';

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

  teste: Observable<any>;

  constructor(
    private listService: ListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teste = this.listService.getList();
    this.teste.subscribe((sucess) => {
      console.log(sucess);
      this.qtdListItens = sucess.length;
      this.listItens = sucess;
    });
    console.log(this.activatedRoute);

    // this.activatedRoute.params.subscribe((params) => {
    //   console.log(params);
    //   this.listItens = this.activatedRoute.snapshot.data['lists'];
    //   this.qtdListItens = this.listItens.length;
    // });
    // this.listService.getList().subscribe((sucess) => {
    //   this.qtdListItens = sucess.length;
    //   this.listItens = sucess;
    // });
  }
}
