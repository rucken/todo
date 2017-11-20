import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, SelectInputModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TodoTasksListModalModule } from '../todo-tasks-list-modal/todo-tasks-list-modal.module';
import { TodoTaskSelectInputComponent } from './todo-task-select-input.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoTasksListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
  ],
  declarations: [
    TodoTaskSelectInputComponent
  ],
  exports: [TodoTaskSelectInputComponent],
  entryComponents: [TodoTaskSelectInputComponent]
})
export class TodoTaskSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoTaskSelectInputModule,
      providers: []
    };
  }
}
