import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoChangeSelectInputComponent } from './todo-change-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FooterButtonsModule, SharedModule, TextInputModule, SelectInputModule} from 'rucken';
import { FormsModule } from '@angular/forms';
import { TodoChangesListModalModule } from '../todo-changes-list-modal/todo-changes-list-modal.module';

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
