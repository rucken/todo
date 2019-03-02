import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntitySelectModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { TasksGridModalModule } from '../tasks-grid-modal/tasks-grid-modal.module';
import { TaskSelectComponent } from './task-select.component';

@NgModule({
  imports: [CommonModule, EntitySelectModule, TasksGridModalModule, NgxBindIOModule],
  declarations: [TaskSelectComponent],
  exports: [TaskSelectComponent, EntitySelectModule, TasksGridModalModule]
})
export class TaskSelectModule {}
