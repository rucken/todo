import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@rucken/web';
import { ChangesGridModule, ProjectsGridModule, TasksGridModule } from '@rucken/todo-web';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectsPageComponent } from './projects-page.component';
import { ProjectsPageRoutes } from './projects-page.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ProjectsPageRoutes),
    ProjectsGridModule,
    TasksGridModule,
    ChangesGridModule,
    PipesModule
  ],
  declarations: [
    ProjectsPageComponent
  ]
})
export class ProjectsPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProjectsPageModule,
      providers: []
    };
  }
}
