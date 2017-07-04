import { SelectInputModule } from 'rucken';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoProjectSelectInputComponent } from './todo-project-select-input.component';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { FooterButtonsModule } from 'rucken';
import { TextInputModule } from 'rucken';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TodoProjectsListModalModule } from '../todo-projects-list-modal/todo-projects-list-modal.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, ModalModule.forRoot(), TranslateModule.forChild(),
    TodoProjectsListModalModule.forRoot(),
    FooterButtonsModule.forRoot(), TextInputModule.forRoot(),
    TooltipModule.forRoot(), SelectInputModule.forRoot()
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
