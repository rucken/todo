import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EntityInputModule } from '@rucken/web';
import { TasksGridModalModule } from '../tasks-grid-modal/tasks-grid-modal.module';
import { TaskInputComponent } from './task-input.component';
import { NgxBindIOModule } from 'ngx-bind-io';

@NgModule({
  imports: [CommonModule, EntityInputModule, TasksGridModalModule, NgxBindIOModule],
  declarations: [TaskInputComponent],
  exports: [TaskInputComponent, EntityInputModule, TasksGridModalModule]
})
export class TaskInputModule {}
