import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoChangesGridComponent } from './todo-changes-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { TodoChangeModalModule } from './todo-change-modal/todo-change-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    TodoChangeModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
  ],
  declarations: [
    TodoChangesGridComponent
  ],
  exports: [TodoChangesGridComponent],
  entryComponents: [TodoChangesGridComponent]
})
export class TodoChangesGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangesGridModule,
      providers: []
    };
  }
}
