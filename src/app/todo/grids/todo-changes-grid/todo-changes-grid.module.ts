import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoChangesGridComponent } from './todo-changes-grid.component';
import { GridSearchPanelModule, PipesModule } from 'rucken';
import { TableColumnModule, GridRowButtonsModule, SharedModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TodoChangeModalModule } from './todo-change-modal/todo-change-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    SharedModule.forRoot(), GridSearchPanelModule.forRoot(),
    TodoChangeModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot(), PipesModule.forRoot()
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
