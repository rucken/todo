import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTasksGridComponent } from './todo-tasks-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { TodoTaskModalModule } from './todo-task-modal/todo-task-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    TodoTaskModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
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
