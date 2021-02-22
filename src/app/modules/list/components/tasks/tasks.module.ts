import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TasksComponent } from './tasks.component';
import { TasksService } from './services/tasks.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, HttpClientModule, FontAwesomeModule, NgbModule],
  exports: [TasksComponent],
  providers: [TasksService],
})
export class TasksModule {}
