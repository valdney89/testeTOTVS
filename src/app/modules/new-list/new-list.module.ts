import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewListComponent } from './new-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListService } from '../list/services/list.service';
import { InputErrorModule } from 'src/app/shared/components/input-error/input-error.module';

@NgModule({
  declarations: [NewListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, InputErrorModule],
  providers: [ListService],
})
export class NewListModule {}
