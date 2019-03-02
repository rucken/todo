import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePromptFormModalComponent, User } from '@rucken/core';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'project-user-modal',
  templateUrl: './project-user-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectUserModalComponent extends BasePromptFormModalComponent<User> {
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
    this.group(User);
  }
}
