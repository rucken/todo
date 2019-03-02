import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityGridModule, WebModalsModule } from '@rucken/web';
import { NgxBindIOModule } from 'ngx-bind-io';
import { TaskModalModule } from '../task-modal/task-modal.module';
import { TasksGridComponent } from './tasks-grid.component';

@NgModule({
  imports: [CommonModule, WebModalsModule, EntityGridModule, TaskModalModule, NgxBindIOModule],
  declarations: [TasksGridComponent],
  exports: [TasksGridComponent, EntityGridModule, TaskModalModule]
})
export class TasksGridModule {}
