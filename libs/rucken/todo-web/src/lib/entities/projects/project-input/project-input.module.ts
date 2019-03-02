import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { ProjectsGridModalModule } from '../projects-grid-modal/projects-grid-modal.module';
import { ProjectInputComponent } from './project-input.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [CommonModule, EntityInputModule, ProjectsGridModalModule, NgxBindIOModule],
  declarations: [ProjectInputComponent],
  exports: [ProjectInputComponent, EntityInputModule, ProjectsGridModalModule]
})
export class ProjectInputModule {}
