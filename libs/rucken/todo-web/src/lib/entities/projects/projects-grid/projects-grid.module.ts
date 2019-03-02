import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntityGridModule, WebModalsModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { ProjectModalModule } from '../project-modal/project-modal.module';
import { ProjectsGridComponent } from './projects-grid.component';

@NgModule({
  imports: [CommonModule, WebModalsModule, EntityGridModule, ProjectModalModule, FontAwesomeModule, NgxBindIOModule],
  declarations: [ProjectsGridComponent],
  exports: [ProjectsGridComponent, EntityGridModule, ProjectModalModule]
})
export class ProjectsGridModule {}
