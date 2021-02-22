import { InputErrorModule } from './../../shared/components/input-error/input-error.module';
import { ModalEditTasksComponent } from './components/modal-edit-tasks/modal-edit-tasks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list.component';
import { TasksModule } from './components/tasks/tasks.module';
import { ModalModule } from './../../shared/components/modal/modal.module';
import { ListService } from './services/list.service';
import { ModalNewTasksComponent } from './components/modal-new-tasks/modal-new-tasks.component';
import { TasksDoneComponent } from './components/tasks-done/tasks-done.component';
import { ModalService } from './../../shared/components/modal/service/modal.service';

@NgModule({
  declarations: [
    ListComponent,
    ModalNewTasksComponent,
    TasksDoneComponent,
    ModalEditTasksComponent,
  ],
  imports: [
    CommonModule,
    TasksModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    InputErrorModule,
  ],
  providers: [ListService, ModalService],
})
export class ListModule {}
