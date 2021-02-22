import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListService } from './../modules/list/services/list.service';

@NgModule({
  declarations: [FooterComponent, SidebarComponent],
  exports: [FooterComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgbModule],
  providers: [ListService],
})
export class CoreModule {}
