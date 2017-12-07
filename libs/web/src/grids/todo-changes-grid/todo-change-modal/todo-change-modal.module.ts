import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import {
  ContentTypeSelectInputModule,
  FooterButtonsModule,
  TextInputModule,
  UserSelectInputModule,
  UsersListModalModule,
} from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TodoChangeModalComponent } from './todo-change-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ContentTypeSelectInputModule.forRoot(),
    UserSelectInputModule.forRoot(),
    UsersListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoChangeModalComponent
  ],
  exports: [TodoChangeModalComponent],
  entryComponents: [TodoChangeModalComponent]
})
export class TodoChangeModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangeModalModule,
      providers: []
    };
  }
}
