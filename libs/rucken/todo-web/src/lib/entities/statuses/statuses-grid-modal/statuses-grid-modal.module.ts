import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { StatusesGridModule } from '../statuses-grid/statuses-grid.module';
import { StatusesGridModalComponent } from './statuses-grid-modal.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [CommonModule, EntityGridModalModule, StatusesGridModule, NgxBindIOModule],
  declarations: [StatusesGridModalComponent],
  entryComponents: [StatusesGridModalComponent],
  exports: [StatusesGridModalComponent, EntityGridModalModule, StatusesGridModule]
})
export class StatusesGridModalModule {}
