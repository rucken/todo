import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoNavbarComponent } from './navbar.component';
import { SharedModule } from '@rucken/web';
import { ConfirmModalModule, AuthModalModule } from '@rucken/web';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule.forRoot(),
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
