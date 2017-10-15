import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoChangesGridModule, TodoProjectsGridModule, TodoTasksGridModule } from '@rucken/todo-web';
import { SharedModule } from '@rucken/web';
import { PageHeaderModule, PageSubHeaderModule } from '@rucken/web';

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
