import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, SelectInputModule, TextInputModule } from '@rucken/web';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { TodoChangesListModalModule } from '../todo-changes-list-modal/todo-changes-list-modal.module';
import { TodoChangeSelectInputComponent } from './todo-change-select-input.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoChangesListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
  ],
  declarations: [
    TodoChangeSelectInputComponent
  ],
  exports: [TodoChangeSelectInputComponent],
  entryComponents: [TodoChangeSelectInputComponent]
})
export class TodoChangeSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangeSelectInputModule,
      providers: []
    };
  }
}
