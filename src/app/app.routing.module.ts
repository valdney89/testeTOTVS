import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewListComponent } from './modules/new-list/new-list.component';
import { ListComponent } from './modules/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: AppComponent,
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
