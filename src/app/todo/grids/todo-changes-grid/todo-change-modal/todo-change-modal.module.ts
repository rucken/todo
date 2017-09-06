import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoChangeModalComponent } from './todo-change-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { ContentTypeSelectInputModule, FooterButtonsModule, UserSelectInputModule, UsersListModalModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    ContentTypeSelectInputModule.forRoot(), UserSelectInputModule.forRoot(),
    UsersListModalModule.forRoot(),
    FooterButtonsModule.forRoot(), TextInputModule.forRoot()
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
