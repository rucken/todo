import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoStatusesGridComponent } from './todo-statuses-grid.component';
import { GridSearchPanelModule, SharedModule, TableColumnModule, GridRowButtonsModule, ConfirmModalModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TodoStatusModalModule } from './todo-status-modal/todo-status-modal.module';

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
