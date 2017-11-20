import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TodoStatusModalComponent } from './todo-status-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoStatusModalComponent
  ],
  exports: [TodoStatusModalComponent],
  entryComponents: [TodoStatusModalComponent]
})
export class TodoStatusModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusModalModule,
      providers: []
    };
  }
}
