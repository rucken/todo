import { Component, Input, ViewChild } from '@angular/core';
import { StatusWithProject, Project } from '@rucken/todo-core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { StatusesGridComponent } from '../statuses-grid/statuses-grid.component';

@Component({
  selector: 'statuses-grid-modal',
  templateUrl: './statuses-grid-modal.component.html'
})
export class StatusesGridModalComponent extends BaseEntityListModalComponent<StatusWithProject> {

  @Input()
  project: Project;
  @ViewChild('grid')
  grid: StatusesGridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
