import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { ProjectsGridModalModule } from '../projects-grid-modal/projects-grid-modal.module';
import { ProjectSelectComponent } from './project-select.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [CommonModule, EntitySelectModule, ProjectsGridModalModule, NgxBindIOModule],
  declarations: [ProjectSelectComponent],
  exports: [ProjectSelectComponent, EntitySelectModule, ProjectsGridModalModule]
})
export class ProjectSelectModule {}
