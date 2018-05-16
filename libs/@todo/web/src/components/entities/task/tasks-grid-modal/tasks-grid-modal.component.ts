import { Component, Input, ViewChild } from '@angular/core';
import { Task } from '@rucken/todo-core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { TasksGridComponent } from '../tasks-grid/tasks-grid.component';

@Component({
  selector: 'tasks-grid-modal',
  templateUrl: './tasks-grid-modal.component.html'
})
export class TasksGridModalComponent extends BaseEntityListModalComponent<Task> {

  @ViewChild('grid')
  grid: TasksGridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
