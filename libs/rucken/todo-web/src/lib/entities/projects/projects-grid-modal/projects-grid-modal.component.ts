import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { BaseEntityListModalComponent } from '@rucken/core';
import { Project } from '@rucken/todo-core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'projects-grid-modal',
  templateUrl: './projects-grid-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsGridModalComponent extends BaseEntityListModalComponent<Project> {
  @ViewChild('grid')
  grid: ProjectsGridComponent;
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
  }
}
