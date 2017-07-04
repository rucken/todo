import { TodoChangesGridModule } from '../todo-changes-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoChangesListModalComponent } from './todo-changes-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), TranslateModule.forChild(),
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
