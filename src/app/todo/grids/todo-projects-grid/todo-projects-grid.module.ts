import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoProjectsGridComponent } from './todo-projects-grid.component';
import { GridSearchPanelModule } from 'rucken';
import { TableColumnModule } from 'rucken';
import { GridRowButtonsModule } from 'rucken';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { TodoProjectModalModule } from './todo-project-modal/todo-project-modal.module';
import { ConfirmModalModule } from 'rucken';

@NgModule({
  imports: [
    CommonModule, TranslateModule.forChild(), GridSearchPanelModule.forRoot(),
    TodoProjectModalModule.forRoot(), ConfirmModalModule.forRoot(),
    TableColumnModule.forRoot(), GridRowButtonsModule.forRoot(), PaginationModule.forRoot()
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
