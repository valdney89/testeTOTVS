import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './modules/list/view/view.component';
import { ListComponent } from './modules/list/list.component';
import { BewListComponent } from './modules/bew-list/bew-list.component';
import { NewListComponent } from './modules/new-list/new-list.component';
import { TasksComponent } from './modules/list/components/tasks/tasks.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MenuComponent } from './core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ListComponent,
    BewListComponent,
    NewListComponent,
    TasksComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
