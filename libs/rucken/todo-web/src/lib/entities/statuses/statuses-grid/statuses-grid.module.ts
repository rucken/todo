import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityGridModule, WebModalsModule } from '@rucken/web';
import { StatusModalModule } from '../status-modal/status-modal.module';
import { StatusesGridComponent } from './statuses-grid.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [CommonModule, WebModalsModule, EntityGridModule, StatusModalModule, NgxBindIOModule],
  declarations: [StatusesGridComponent],
  exports: [StatusesGridComponent, EntityGridModule, StatusModalModule]
})
export class StatusesGridModule {}
