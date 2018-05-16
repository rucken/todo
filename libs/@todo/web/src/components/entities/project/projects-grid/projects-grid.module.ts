import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModule, PipesModule } from '@rucken/web';
import { ProjectModalModule } from '../project-modal/project-modal.module';
import { ProjectsGridComponent } from './projects-grid.component';

@NgModule({
  imports: [
    CommonModule,
    EntityGridModule,
    ProjectModalModule,
    PipesModule.forRoot()
  ],
  declarations: [
    ProjectsGridComponent
  ],
  exports: [
    ProjectsGridComponent,
    EntityGridModule,
    ProjectModalModule,
    PipesModule
  ]
})
export class ProjectsGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProjectsGridModule,
      providers: []
    };
  }
}
