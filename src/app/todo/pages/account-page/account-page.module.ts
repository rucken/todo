import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoAccountPageRoutes } from './account-page.routes';
import { AccountPageModule } from 'rucken';

@NgModule({
  imports: [
    AccountPageModule.forRoot(),
    RouterModule.forChild(TodoAccountPageRoutes)
  ]
})
export class TodoAccountPageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoAccountPageModule,
      providers: []
    };
  }
}
