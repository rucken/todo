import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap';

import { TodoStatusesGridModule } from '../todo-statuses-grid.module';
import { TodoStatusesListModalComponent } from './todo-statuses-list-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TodoStatusesGridModule.forRoot()
  ],
  declarations: [
    TodoStatusesListModalComponent
  ],
  exports: [TodoStatusesListModalComponent],
  entryComponents: [TodoStatusesListModalComponent]
})
export class TodoStatusesListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusesListModalModule,
      providers: []
    };
  }
}
