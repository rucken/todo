import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@rucken/web';
import { PageHeaderModule } from '@rucken/web';

import { TodoHomePageComponent } from './home-page.component';
import { TodoHomePageRoutes } from './home-page.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    RouterModule.forChild(TodoHomePageRoutes)
  ],
  declarations: [TodoHomePageComponent],
  exports: [TodoHomePageComponent],
  entryComponents: [TodoHomePageComponent]
})
export class TodoHomePageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoHomePageModule,
      providers: []
    };
  }
}
