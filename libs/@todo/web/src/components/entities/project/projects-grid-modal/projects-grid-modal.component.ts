import { Component, Input, ViewChild } from '@angular/core';
import { Project } from '@todo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';

@Component({
  selector: 'projects-grid-modal',
  templateUrl: './projects-grid-modal.component.html'
})
export class ProjectsGridModalComponent extends BaseEntityListModalComponent<Project> {

  @ViewChild('grid')
  grid: ProjectsGridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
