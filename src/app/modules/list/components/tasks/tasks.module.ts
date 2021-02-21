import { TasksService } from './services/tasks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [TasksComponent],
  providers: [TasksService],
})
export class TasksModule {}
