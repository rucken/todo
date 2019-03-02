import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityGridModalModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { TasksGridModule } from '../tasks-grid/tasks-grid.module';
import { TasksGridModalComponent } from './tasks-grid-modal.component';

@NgModule({
  imports: [CommonModule, EntityGridModalModule, TasksGridModule, NgxBindIOModule],
  declarations: [TasksGridModalComponent],
  entryComponents: [TasksGridModalComponent],
  exports: [TasksGridModalComponent, EntityGridModalModule, TasksGridModule]
})
export class TasksGridModalModule {}
