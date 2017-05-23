import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatusesGridComponent } from './todo-statuses-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { TodoStatusModalModule } from './todo-status-modal/todo-status-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    TodoStatusModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
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
