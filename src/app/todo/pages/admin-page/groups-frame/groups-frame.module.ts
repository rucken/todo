import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoGroupsFrameRoutes } from './groups-frame.routes';
import { GroupsFrameModule } from '@rucken/web';

@NgModule({
  imports: [
    GroupsFrameModule.forRoot(),
    RouterModule.forChild(TodoGroupsFrameRoutes)
  ]
})
export class TodoGroupsFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GroupsFrameModule,
      providers: []
    };
  }
}
