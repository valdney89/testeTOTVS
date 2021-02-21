import { ModalService } from './../../shared/components/modal/service/modal.service';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list.component';
import { TasksModule } from './components/tasks/tasks.module';
import { ModalModule } from './../../shared/components/modal/modal.module';
import { ListService } from './services/list.service';
import { ModalNewTasksComponent } from './components/modal-new-tasks/modal-new-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, ModalNewTasksComponent],
  imports: [
    CommonModule,
    TasksModule,
    FontAwesomeModule,
    ModalModule,
    ReactiveFormsModule,
  ],
  providers: [ListService, ModalService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ListModule {}
