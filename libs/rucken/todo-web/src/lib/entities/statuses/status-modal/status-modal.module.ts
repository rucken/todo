import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PromptFormModalModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { StatusModalComponent } from './status-modal.component';

@NgModule({
  imports: [CommonModule, PromptFormModalModule, NgxBindIOModule],
  declarations: [StatusModalComponent],
  entryComponents: [StatusModalComponent],
  exports: [StatusModalComponent, PromptFormModalModule]
})
export class StatusModalModule {}
