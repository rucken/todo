import { Component, Input, ViewChild } from '@angular/core';
import { Change } from '@rucken/todo-core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BaseEntityListModalComponent } from '@rucken/web';
import { ChangesGridComponent } from '../changes-grid/changes-grid.component';

@Component({
  selector: 'changes-grid-modal',
  templateUrl: './changes-grid-modal.component.html'
})
export class ChangesGridModalComponent extends BaseEntityListModalComponent<Change> {

  @ViewChild('grid')
  grid: ChangesGridComponent;
  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
  }
}
