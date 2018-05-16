import { Component } from '@angular/core';
import { Change } from '@todo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BasePromptFormModalComponent } from '@rucken/web';

@Component({
  selector: 'change-modal',
  templateUrl: './change-modal.component.html'
})
export class ChangeModalComponent extends BasePromptFormModalComponent<Change> {

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
    this.group(Change);
  }
}
