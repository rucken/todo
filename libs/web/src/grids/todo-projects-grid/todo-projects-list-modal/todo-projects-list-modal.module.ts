import { TodoProjectsGridModule } from '../todo-projects-grid.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TodoProjectsListModalComponent } from './todo-projects-list-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { SharedModule } from '@rucken/web';
import { FooterButtonsModule } from '@rucken/web';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    FooterButtonsModule.forRoot(),
    TodoProjectsGridModule.forRoot()
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
