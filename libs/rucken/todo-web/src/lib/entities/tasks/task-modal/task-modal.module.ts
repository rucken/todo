import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PromptFormModalModule } from '@rucken/web';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { StatusInputModule } from '../../statuses/status-input/status-input.module';
import { StatusSelectModule } from '../../statuses/status-select/status-select.module';
import { TaskModalComponent } from './task-modal.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [
    CommonModule,
    PromptFormModalModule,
    BsDatepickerModule,
    StatusInputModule,
    TypeaheadModule.forRoot(),
    NgxBindIOModule
  ],
  declarations: [TaskModalComponent],
  entryComponents: [TaskModalComponent],
  exports: [TaskModalComponent, PromptFormModalModule, BsDatepickerModule, StatusSelectModule]
})
export class TaskModalModule {}
