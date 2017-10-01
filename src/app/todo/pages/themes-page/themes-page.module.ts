import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemesPageModule } from '@rucken/web';

import { TodoThemesPageRoutes } from './themes-page.routes';

@NgModule({
  imports: [
    ThemesPageModule.forRoot(),
    RouterModule.forChild(TodoThemesPageRoutes)
  ]
})
export class TodoThemesPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoThemesPageModule,
      providers: []
    };
  }
}
