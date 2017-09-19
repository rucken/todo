import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoTasksGridComponent } from './todo-tasks-grid.component';
import { GridSearchPanelModule, TableColumnModule, GridRowButtonsModule, ConfirmModalModule, SharedModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TodoTaskModalModule } from './todo-task-modal/todo-task-modal.module';


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
