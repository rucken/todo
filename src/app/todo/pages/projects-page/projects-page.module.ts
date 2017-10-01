import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@rucken/core';
import { PageHeaderModule, PageSubHeaderModule } from '@rucken/web';

import { TodoChangesGridModule } from '../../grids/todo-changes-grid/todo-changes-grid.module';
import { TodoProjectsGridModule } from '../../grids/todo-projects-grid/todo-projects-grid.module';
import { TodoTasksGridModule } from '../../grids/todo-tasks-grid/todo-tasks-grid.module';
import { TodoProjectsPageComponent } from './projects-page.component';
import { TodoProjectsPageRoutes } from './projects-page.routes';

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
