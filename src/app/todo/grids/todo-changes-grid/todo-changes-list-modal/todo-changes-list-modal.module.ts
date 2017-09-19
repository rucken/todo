import { TodoChangesGridModule } from '../todo-changes-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoChangesListModalComponent } from './todo-changes-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, SharedModule } from 'rucken';

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
