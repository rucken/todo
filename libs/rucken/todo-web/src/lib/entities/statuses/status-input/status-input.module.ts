import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { StatusesGridModalModule } from '../statuses-grid-modal/statuses-grid-modal.module';
import { StatusInputComponent } from './status-input.component';

@NgModule({
  imports: [CommonModule, EntityInputModule, StatusesGridModalModule, NgxBindIOModule],
  declarations: [StatusInputComponent],
  exports: [StatusInputComponent, EntityInputModule, StatusesGridModalModule]
})
export class StatusInputModule {}
