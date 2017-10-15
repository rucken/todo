import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAdminPageRoutes } from './admin-page.routes';
import { AdminPageModule } from '@rucken/web';

@NgModule({
  imports: [
    AdminPageModule.forRoot(),
    RouterModule.forChild(TodoAdminPageRoutes)
  ]
})
export class TodoAdminPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoAdminPageModule,
      providers: []
    };
  }
}
