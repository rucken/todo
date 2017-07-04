import { TodoProjectsGridModule } from '../todo-projects-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoProjectsListModalComponent } from './todo-projects-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule, ModalModule.forRoot(), TranslateModule.forChild(),
    FooterButtonsModule.forRoot(), TodoProjectsGridModule.forRoot()
  ],
  declarations: [
    TodoProjectsListModalComponent
  ],
  exports: [TodoProjectsListModalComponent],
  entryComponents: [TodoProjectsListModalComponent]
})
export class TodoProjectsListModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TodoProjectsListModalModule,
      providers: []
    };
  }
}
