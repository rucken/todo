import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoProjectModalComponent } from './todo-project-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, UsersGridModule, SharedModule, TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TodoUsersGridModule } from '../../todo-users-grid/todo-users-grid.module';
import { TodoStatusesGridModule } from '../../todo-statuses-grid/todo-statuses-grid.module';

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
