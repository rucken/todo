import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoProjectsPageComponent } from './projects-page.component';
import { RouterModule } from '@angular/router';
import { TodoProjectsPageRoutes } from './projects-page.routes';
import { PageHeaderModule, PageSubHeaderModule, SharedModule } from 'rucken';
import { TodoTasksGridModule } from '../../grids/todo-tasks-grid/todo-tasks-grid.module';
import { TodoChangesGridModule } from '../../grids/todo-changes-grid/todo-changes-grid.module';
import { TodoProjectsGridModule } from '../../grids/todo-projects-grid/todo-projects-grid.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PageSubHeaderModule.forRoot(),
    TodoProjectsGridModule.forRoot(),
    TodoTasksGridModule.forRoot(),
    TodoChangesGridModule.forRoot(),
    RouterModule.forChild(TodoProjectsPageRoutes)
  ],
  declarations: [TodoProjectsPageComponent],
  exports: [TodoProjectsPageComponent],
  entryComponents: [TodoProjectsPageComponent]
})
export class TodoProjectsPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProjectsPageModule,
      providers: []
    };
  }
}
