import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewListComponent } from './modules/new-list/new-list.component';
import { ListComponent } from './modules/list/list.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { TasksResolver } from './modules/list/guards/tasks-resolver.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'To Do List - Início',
    },
  },
  {
    path: 'list/add',
    component: NewListComponent,
    data: {
      title: 'Nova Lista',
    },
  },
  {
    path: 'list/:id',
    component: ListComponent,
    data: {
      title: 'Editar Lista',
    },
    resolve: {
      listTasks: TasksResolver,
    },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Página não encontrada',
    },
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
