import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/core';
import { ConfirmModalModule, GridRowButtonsModule, GridSearchPanelModule, TableColumnModule } from '@rucken/web';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { TodoProjectModalModule } from './todo-project-modal/todo-project-modal.module';
import { TodoProjectsGridComponent } from './todo-projects-grid.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    GridSearchPanelModule.forRoot(),
    TodoProjectModalModule.forRoot(),
    ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(),
    GridRowButtonsModule.forRoot(),
    PaginationModule.forRoot()
  ],
  declarations: [
    TodoProjectsGridComponent
  ],
  exports: [TodoProjectsGridComponent],
  entryComponents: [TodoProjectsGridComponent]
})
export class TodoProjectsGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProjectsGridModule,
      providers: []
    };
  }
}
