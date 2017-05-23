import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoUsersGridComponent } from './todo-users-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmModalModule } from 'rucken';
import { TodoUserModalModule } from './todo-user-modal/todo-user-modal.module';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    ConfirmModalModule.forRoot(), TodoUserModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
  ],
  declarations: [
    TodoUsersGridComponent
  ],
  exports: [TodoUsersGridComponent],
  entryComponents: [TodoUsersGridComponent]
})
export class TodoUsersGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoUsersGridModule,
      providers: []
    };
  }
}
