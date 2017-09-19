import { SelectInputModule, SharedModule, FooterButtonsModule, TextInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoProjectSelectInputComponent } from './todo-project-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { TodoProjectsListModalModule } from '../todo-projects-list-modal/todo-projects-list-modal.module';

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
