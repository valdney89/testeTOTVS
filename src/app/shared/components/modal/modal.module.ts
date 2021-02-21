import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, NgbModule],
  exports: [ModalComponent],
  providers: [],
})
export class ModalModule {}
