import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewListComponent } from './new-list.component';
import { ListService } from '../list/services/list.service';
import { SidebarService } from './../../core/sidebar/services/sidebar.service';
import { InputErrorModule } from './../../shared/components/input-error/input-error.module';

@NgModule({
  declarations: [NewListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputErrorModule],
  providers: [ListService, SidebarService],
})
export class NewListModule {}
