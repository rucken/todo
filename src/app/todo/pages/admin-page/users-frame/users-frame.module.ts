import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoUsersFrameRoutes } from './users-frame.routes';
import { UsersFrameModule } from 'rucken';

@NgModule({
  imports: [
    UsersFrameModule.forRoot(),
    RouterModule.forChild(TodoUsersFrameRoutes)
  ]
})
export class TodoUsersFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoUsersFrameModule,
      providers: []
    };
  }
}
