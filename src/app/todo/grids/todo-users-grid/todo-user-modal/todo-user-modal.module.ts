import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoUserModalComponent } from './todo-user-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, TextInputModule, CheckboxesInputModule, SharedModule } from 'rucken';
import { FormsModule } from '@angular/forms';

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
