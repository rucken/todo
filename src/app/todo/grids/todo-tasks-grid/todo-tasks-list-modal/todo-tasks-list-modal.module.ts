import { TodoTasksGridModule } from '../todo-tasks-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoTasksListModalComponent } from './todo-tasks-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), TranslateModule.forChild(),
    FooterButtonsModule.forRoot(), TodoTasksGridModule.forRoot()
  ],
  declarations: [
    TodoTasksListModalComponent
  ],
  exports: [TodoTasksListModalComponent],
  entryComponents: [TodoTasksListModalComponent]
})
export class TodoTasksListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoTasksListModalModule,
      providers: []
    };
  }
}
