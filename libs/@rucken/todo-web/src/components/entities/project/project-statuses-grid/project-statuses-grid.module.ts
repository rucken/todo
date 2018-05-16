import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StatusModalModule } from '../../status/status-modal/status-modal.module';
import { StatusesGridModalModule } from '../../status/statuses-grid-modal/statuses-grid-modal.module';
import { ProjectStatusesGridComponent } from './project-statuses-grid.component';

@NgModule({
  imports: [
    CommonModule,
    StatusesGridModalModule,
    StatusModalModule
  ],
  declarations: [
    ProjectStatusesGridComponent
  ],
  exports: [
    ProjectStatusesGridComponent,
    StatusesGridModalModule,
    StatusModalModule
  ]
})
export class ProjectStatusesGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProjectStatusesGridModule,
      providers: []
    };
  }
}
