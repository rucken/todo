import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { CheckboxesInputModule, FooterButtonsModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap';

import { TodoUserModalComponent } from './todo-user-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    CheckboxesInputModule.forRoot()
  ],
  declarations: [
    TodoUserModalComponent
  ],
  exports: [TodoUserModalComponent],
  entryComponents: [TodoUserModalComponent]
})
export class TodoUserModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoUserModalModule,
      providers: []
    };
  }
}
