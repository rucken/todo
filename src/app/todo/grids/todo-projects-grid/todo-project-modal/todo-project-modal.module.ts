import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoProjectModalComponent } from './todo-project-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ModalFooterButtonsModule, UsersGridModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { TodoUsersGridModule } from '../../todo-users-grid/todo-users-grid.module';
import { TodoStatusesGridModule } from '../../todo-statuses-grid/todo-statuses-grid.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(), TodoUsersGridModule.forRoot(), TodoStatusesGridModule.forRoot(),
    ModalFooterButtonsModule.forRoot(), TextInputModule.forRoot()
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
