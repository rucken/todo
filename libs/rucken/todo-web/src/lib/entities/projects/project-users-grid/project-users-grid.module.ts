import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModalModule, UsersGridModalModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { ProjectUserModalModule } from '../project-user-modal/project-user-modal.module';
import { ProjectUsersGridComponent } from './project-users-grid.component';

@NgModule({
  imports: [CommonModule, UsersGridModalModule, UserModalModule, ProjectUserModalModule, NgxBindIOModule],
  declarations: [ProjectUsersGridComponent],
  exports: [ProjectUsersGridComponent, UsersGridModalModule, UserModalModule, ProjectUserModalModule]
})
export class ProjectUsersGridModule {}
