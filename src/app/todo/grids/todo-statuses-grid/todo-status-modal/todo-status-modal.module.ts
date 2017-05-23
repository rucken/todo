import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatusModalComponent } from './todo-status-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot()
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
