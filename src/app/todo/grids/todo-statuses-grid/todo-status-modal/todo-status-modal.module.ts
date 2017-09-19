import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoStatusModalComponent } from './todo-status-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule, TextInputModule, SharedModule } from 'rucken';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    FormsModule,
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TextInputModule.forRoot()
  ],
  declarations: [
    TodoStatusModalComponent
  ],
  exports: [TodoStatusModalComponent],
  entryComponents: [TodoStatusModalComponent]
})
export class TodoStatusModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoStatusModalModule,
      providers: []
    };
  }
}
