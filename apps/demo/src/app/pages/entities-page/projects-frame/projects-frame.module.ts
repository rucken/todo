import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectsGridModule } from '@rucken/todo-web';
import { NgxPermissionsModule } from 'ngx-permissions';
import { SharedModule } from '../../../shared/shared.module';
import { ProjectsFrameComponent } from './projects-frame.component';
import { PROJECTS_FRAME_ROUTES } from './projects-frame.routes';

@NgModule({
  imports: [
    SharedModule,
    NgxPermissionsModule,
    RouterModule.forChild(PROJECTS_FRAME_ROUTES),
    ProjectsGridModule,
    FormsModule
  ],
  declarations: [ProjectsFrameComponent]
})
export class ProjectsFrameModule {}
