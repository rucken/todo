import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTaskModalComponent } from './todo-task-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TodoStatusSelectInputModule } from '../../todo-statuses-grid/todo-status-select-input/todo-status-select-input.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoStatusSelectInputModule.forRoot(), FooterButtonsModule.forRoot(), TextInputModule.forRoot()
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
