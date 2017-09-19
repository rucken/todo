import { SelectInputModule, SharedModule, FooterButtonsModule, TextInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoStatusSelectInputComponent } from './todo-status-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { TodoStatusesListModalModule } from '../todo-statuses-list-modal/todo-statuses-list-modal.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoStatusesListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
  ],
  declarations: [
    TodoStatusSelectInputComponent
  ],
  exports: [TodoStatusSelectInputComponent],
  entryComponents: [TodoStatusSelectInputComponent]
})
export class TodoStatusSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusSelectInputModule,
      providers: []
    };
  }
}
