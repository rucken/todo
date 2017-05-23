import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoChangeModalComponent } from './todo-change-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TodoProjectSelectInputModule } from '../../todo-projects-grid/todo-project-select-input/todo-project-select-input.module';
import { TodoTaskSelectInputModule } from '../../todo-tasks-grid/todo-task-select-input/todo-task-select-input.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoProjectSelectInputModule.forRoot(), TodoTaskSelectInputModule.forRoot(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot()
  ],
  declarations: [
    TodoChangeModalComponent
  ],
  exports: [TodoChangeModalComponent],
  entryComponents: [TodoChangeModalComponent]
})
export class TodoChangeModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangeModalModule,
      providers: []
    };
  }
}
