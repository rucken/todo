import { TodoStatusesGridModule } from '../todo-statuses-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoStatusesListModalComponent } from './todo-statuses-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, SharedModule } from 'rucken';

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
