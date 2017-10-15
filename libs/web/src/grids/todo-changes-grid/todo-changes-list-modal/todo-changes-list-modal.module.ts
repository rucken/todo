import { ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';

import { TodoChangesGridModule } from '../todo-changes-grid.module';
import { TodoChangesListModalComponent } from './todo-changes-list-modal.component';

@NgModule({
  imports: [
    SharedModule.forRoot(), ModalModule.forRoot(),
    FooterButtonsModule.forRoot(), TodoChangesGridModule.forRoot()
  ],
  declarations: [
    TodoChangesListModalComponent
  ],
  exports: [TodoChangesListModalComponent],
  entryComponents: [TodoChangesListModalComponent]
})
export class TodoChangesListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangesListModalModule,
      providers: []
    };
  }
}
