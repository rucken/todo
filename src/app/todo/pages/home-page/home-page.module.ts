import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { TodoHomePageRoutes } from './home-page.routes';
import { PageHeaderModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
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
