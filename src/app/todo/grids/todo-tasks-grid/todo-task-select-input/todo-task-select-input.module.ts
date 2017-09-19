import { SelectInputModule, SharedModule, FooterButtonsModule, TextInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoTaskSelectInputComponent } from './todo-task-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { TodoTasksListModalModule } from '../todo-tasks-list-modal/todo-tasks-list-modal.module';

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
