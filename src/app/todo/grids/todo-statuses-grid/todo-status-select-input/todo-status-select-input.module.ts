import { SelectInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatusSelectInputComponent } from './todo-status-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoStatusesListModalModule } from '../todo-statuses-list-modal/todo-statuses-list-modal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoStatusesListModalModule.forRoot(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot(),
    TooltipModule.forRoot(), SelectInputModule.forRoot()
  ],
  declarations: [
    TodoStatusSelectInputComponent
  ],
  exports: [TodoStatusSelectInputComponent],
  entryComponents: [TodoStatusSelectInputComponent]
})
export class TodoStatusSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusSelectInputModule,
      providers: []
    };
  }
}
