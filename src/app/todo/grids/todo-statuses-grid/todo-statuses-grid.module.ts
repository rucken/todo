import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/web';
import { ConfirmModalModule, GridRowButtonsModule, GridSearchPanelModule, TableColumnModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TodoStatusModalModule } from './todo-status-modal/todo-status-modal.module';
import { TodoStatusesGridComponent } from './todo-statuses-grid.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    TodoStatusModalModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    TodoStatusesGridComponent
  ],
  exports: [TodoStatusesGridComponent],
  entryComponents: [TodoStatusesGridComponent]
})
export class TodoStatusesGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusesGridModule,
      providers: []
    };
  }
}
