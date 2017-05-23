import { SelectInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskSelectInputComponent } from './todo-task-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoTasksListModalModule } from '../todo-tasks-list-modal/todo-tasks-list-modal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoTasksListModalModule.forRoot(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot(),
    TooltipModule.forRoot(), SelectInputModule.forRoot()
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
