import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap';

import { TodoStatusesGridModule } from '../../todo-statuses-grid/todo-statuses-grid.module';
import { TodoUsersGridModule } from '../../todo-users-grid/todo-users-grid.module';
import { TodoProjectModalComponent } from './todo-project-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoUsersGridModule.forRoot(),
    TodoStatusesGridModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoProjectModalComponent
  ],
  exports: [TodoProjectModalComponent],
  entryComponents: [TodoProjectModalComponent]
})
export class TodoProjectModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProjectModalModule,
      providers: []
    };
  }
}
