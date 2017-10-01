import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoProfileFrameRoutes } from './profile-frame.routes';
import { ProfileFrameModule } from '@rucken/web';

@NgModule({
  imports: [
    ProfileFrameModule.forRoot(),
    RouterModule.forChild(TodoProfileFrameRoutes)
  ]
})
export class TodoProfileFrameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProfileFrameModule,
      providers: []
    };
  }
}
