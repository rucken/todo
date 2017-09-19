import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoChangeModalComponent } from './todo-change-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ContentTypeSelectInputModule, FooterButtonsModule, UserSelectInputModule, UsersListModalModule } from 'rucken';
import { TextInputModule, SharedModule } from 'rucken';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    ContentTypeSelectInputModule.forRoot(),
    UserSelectInputModule.forRoot(),
    UsersListModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoChangeModalComponent
  ],
  exports: [TodoChangeModalComponent],
  entryComponents: [TodoChangeModalComponent]
})
export class TodoChangeModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoChangeModalModule,
      providers: []
    };
  }
}
