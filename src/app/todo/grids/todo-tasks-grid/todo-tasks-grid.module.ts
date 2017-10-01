import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/core';
import { ConfirmModalModule, GridRowButtonsModule, GridSearchPanelModule, TableColumnModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TodoTaskModalModule } from './todo-task-modal/todo-task-modal.module';
import { TodoTasksGridComponent } from './todo-tasks-grid.component';


@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    TodoTaskModalModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    TodoTasksGridComponent
  ],
  exports: [TodoTasksGridComponent],
  entryComponents: [TodoTasksGridComponent]
})
export class TodoTasksGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoTasksGridModule,
      providers: []
    };
  }
}
