import { TodoStatusesGridModule } from '../todo-statuses-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoStatusesListModalComponent } from './todo-statuses-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), TranslateModule.forChild(),
    FooterButtonsModule.forRoot(), TodoStatusesGridModule.forRoot()
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
