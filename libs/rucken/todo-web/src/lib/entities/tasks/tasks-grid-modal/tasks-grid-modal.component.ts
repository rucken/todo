import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { BaseEntityListModalComponent } from '@rucken/core';
import { Task } from '@rucken/todo-core';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'tasks-grid-modal',
  templateUrl: './tasks-grid-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksGridModalComponent extends BaseEntityListModalComponent<Task> {
  @ViewChild('grid')
  grid: TasksGridComponent;
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
  }
}
