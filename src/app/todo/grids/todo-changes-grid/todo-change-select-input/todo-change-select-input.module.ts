import { SelectInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoChangeSelectInputComponent } from './todo-change-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoChangesListModalModule } from '../todo-changes-list-modal/todo-changes-list-modal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoChangesListModalModule.forRoot(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot(),
    TooltipModule.forRoot(), SelectInputModule.forRoot()
  ],
  declarations: [
    TodoChangeSelectInputComponent
  ],
  exports: [TodoChangeSelectInputComponent],
  entryComponents: [TodoChangeSelectInputComponent]
})
export class TodoChangeSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangeSelectInputModule,
      providers: []
    };
  }
}
