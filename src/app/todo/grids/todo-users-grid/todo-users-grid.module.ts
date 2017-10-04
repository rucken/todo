import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/web';
import { ConfirmModalModule, GridRowButtonsModule, GridSearchPanelModule, TableColumnModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TodoUserModalModule } from './todo-user-modal/todo-user-modal.module';
import { TodoUsersGridComponent } from './todo-users-grid.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TodoUserModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
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
