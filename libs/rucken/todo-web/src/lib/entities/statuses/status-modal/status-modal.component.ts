import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasePromptFormModalComponent } from '@rucken/core';
import { StatusWithProject } from '@rucken/todo-core';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'status-modal',
  templateUrl: './status-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusModalComponent extends BasePromptFormModalComponent<StatusWithProject> {
  constructor() {
    super();
    this.group(StatusWithProject);
  }
}
