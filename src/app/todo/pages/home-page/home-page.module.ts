import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoHomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { TodoHomePageRoutes } from './home-page.routes';
import { PageHeaderModule, SharedModule } from 'rucken';

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
export class HomePageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomePageModule,
      providers: []
    };
  }
}
