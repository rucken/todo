import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoUsersGridComponent } from './todo-users-grid.component';
import { GridSearchPanelModule, SharedModule, TableColumnModule, GridRowButtonsModule, ConfirmModalModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TodoUserModalModule } from './todo-user-modal/todo-user-modal.module';

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
