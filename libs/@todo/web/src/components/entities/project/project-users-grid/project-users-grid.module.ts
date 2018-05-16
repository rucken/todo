import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UsersGridModalModule, UserModalModule } from '@rucken/web';
import { ProjectUsersGridComponent } from './project-users-grid.component';

@NgModule({
  imports: [
    CommonModule,
    UsersGridModalModule,
    UserModalModule
  ],
  declarations: [
    ProjectUsersGridComponent
  ],
  exports: [
    ProjectUsersGridComponent,
    UsersGridModalModule,
    UserModalModule
  ]
})
export class ProjectUsersGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProjectUsersGridModule,
      providers: []
    };
  }
}
