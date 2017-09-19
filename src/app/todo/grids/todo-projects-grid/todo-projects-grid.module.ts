import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoProjectsGridComponent } from './todo-projects-grid.component';
import { GridSearchPanelModule, SharedModule, ConfirmModalModule, GridRowButtonsModule, TableColumnModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TodoProjectModalModule } from './todo-project-modal/todo-project-modal.module';

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
