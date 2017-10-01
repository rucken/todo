import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/core';
import { FooterButtonsModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap';

import { TodoTasksGridModule } from '../todo-tasks-grid.module';
import { TodoTasksListModalComponent } from './todo-tasks-list-modal.component';

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
