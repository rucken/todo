import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule, SelectInputModule, TextInputModule } from '@rucken/web';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';

import { TodoProjectsListModalModule } from '../todo-projects-list-modal/todo-projects-list-modal.module';
import { TodoProjectSelectInputComponent } from './todo-project-select-input.component';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    TodoProjectsListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot(),
    TooltipModule.forRoot(),
    SelectInputModule.forRoot()
  ],
  declarations: [
    TodoProjectSelectInputComponent
  ],
  exports: [TodoProjectSelectInputComponent],
  entryComponents: [TodoProjectSelectInputComponent]
})
export class TodoProjectSelectInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProjectSelectInputModule,
      providers: []
    };
  }
}
