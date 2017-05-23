import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoNavbarComponent } from './navbar.component';
import { ConfirmModalModule, AuthModalModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    ConfirmModalModule.forRoot(),
    AuthModalModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule
  ],
  declarations: [
    TodoNavbarComponent
  ],
  exports: [
    TodoNavbarComponent
  ],
  entryComponents: [TodoNavbarComponent]
})
export class TodoNavbarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoNavbarModule,
      providers: []
    };
  }
}
