import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RuckenWebPipes, SharedModule, PipesModule } from '@rucken/web';
import { PageHeaderModule } from '@rucken/web';

import { TodoHomePageComponent } from './home-page.component';
import { TodoHomePageRoutes } from './home-page.routes';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    PageHeaderModule.forRoot(),
    PipesModule.forRoot(),
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
