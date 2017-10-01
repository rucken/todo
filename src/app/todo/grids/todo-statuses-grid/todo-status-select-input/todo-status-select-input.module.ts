import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/core';
import { FooterButtonsModule, SelectInputModule, TextInputModule } from '@rucken/web';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';

import { TodoStatusesListModalModule } from '../todo-statuses-list-modal/todo-statuses-list-modal.module';
import { TodoStatusSelectInputComponent } from './todo-status-select-input.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoStatusesListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
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
