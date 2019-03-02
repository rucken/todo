import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { ProjectsGridModule } from '../projects-grid/projects-grid.module';
import { ProjectsGridModalComponent } from './projects-grid-modal.component';

@NgModule({
  imports: [CommonModule, EntityGridModalModule, ProjectsGridModule, NgxBindIOModule],
  declarations: [ProjectsGridModalComponent],
  entryComponents: [ProjectsGridModalComponent],
  exports: [ProjectsGridModalComponent, EntityGridModalModule, ProjectsGridModule]
})
export class ProjectsGridModalModule {}
