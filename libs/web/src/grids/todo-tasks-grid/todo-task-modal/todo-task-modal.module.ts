import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';

import {
  TodoStatusSelectInputModule,
} from '../../todo-statuses-grid/todo-status-select-input/todo-status-select-input.module';
import { TodoTaskModalComponent } from './todo-task-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoStatusSelectInputModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoTaskModalComponent
  ],
  exports: [TodoTaskModalComponent],
  entryComponents: [TodoTaskModalComponent]
})
export class TodoTaskModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoTaskModalModule,
      providers: []
    };
  }
}
