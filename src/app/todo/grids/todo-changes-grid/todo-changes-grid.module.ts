import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/web';
import { GridSearchPanelModule, PipesModule } from '@rucken/web';
import { GridRowButtonsModule, TableColumnModule } from '@rucken/web';
import { ConfirmModalModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TodoChangeModalModule } from './todo-change-modal/todo-change-modal.module';
import { TodoChangesGridComponent } from './todo-changes-grid.component';

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
