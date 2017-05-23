import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoUserModalComponent } from './todo-user-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { CheckboxesInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    ModalFooterButtonsModule.forRoot()
    TextInputModule.forRoot(), CheckboxesInputModule.forRoot()
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
