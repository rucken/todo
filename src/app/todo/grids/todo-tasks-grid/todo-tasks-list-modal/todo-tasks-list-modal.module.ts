import { TodoTasksGridModule } from '../todo-tasks-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoTasksListModalComponent } from './todo-tasks-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, SharedModule } from 'rucken';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TodoTasksGridModule.forRoot()
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
