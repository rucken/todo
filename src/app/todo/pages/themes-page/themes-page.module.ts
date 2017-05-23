import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoThemesPageRoutes } from './themes-page.routes';
import { ThemesPageModule } from 'rucken';

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
