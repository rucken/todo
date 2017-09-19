import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoTaskModalComponent } from './todo-task-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, SharedModule, TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TodoStatusSelectInputModule } from '../../todo-statuses-grid/todo-status-select-input/todo-status-select-input.module';

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
