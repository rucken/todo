import { Component, Input } from '@angular/core';
import { BasePromptFormModalComponent } from '@rucken/web';
import { Task } from '@todo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html'
})
export class TaskModalComponent extends BasePromptFormModalComponent<Task> {

  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
    this.group(Task);
  }
}
