import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePromptFormModalComponent } from '@rucken/core';
import { Task } from '@rucken/todo-core';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'task-modal',
  templateUrl: './task-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskModalComponent extends BasePromptFormModalComponent<Task> {
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
    this.group(Task);
  }
}
