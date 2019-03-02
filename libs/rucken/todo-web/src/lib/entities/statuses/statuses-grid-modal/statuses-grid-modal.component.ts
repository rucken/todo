import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { Project, StatusWithProject } from '@rucken/todo-core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { StatusesGridComponent } from '../statuses-grid/statuses-grid.component';
import { BaseEntityListModalComponent } from '@rucken/core';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'statuses-grid-modal',
  templateUrl: './statuses-grid-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusesGridModalComponent extends BaseEntityListModalComponent<StatusWithProject> {
  @ViewChild('grid')
  grid: StatusesGridComponent;
  @Input()
  apiUrl?: string = undefined;
  @Input()
  project: Project = undefined;

  constructor() {
    super();
  }
}
