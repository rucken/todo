import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { StatusesGridModalModule } from '../statuses-grid-modal/statuses-grid-modal.module';
import { StatusSelectComponent } from './status-select.component';

@NgModule({
  imports: [CommonModule, EntitySelectModule, StatusesGridModalModule, NgxBindIOModule],
  declarations: [StatusSelectComponent],
  exports: [StatusSelectComponent, EntitySelectModule, StatusesGridModalModule]
})
export class StatusSelectModule {}
