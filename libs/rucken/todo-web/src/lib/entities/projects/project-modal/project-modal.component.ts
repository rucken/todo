import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BasePromptFormModalComponent } from '@rucken/core';
import { Project } from '@rucken/todo-core';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'project-modal',
  templateUrl: './project-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectModalComponent extends BasePromptFormModalComponent<Project> {
  @Input()
  apiUrl?: string = undefined;

  constructor() {
    super();
    this.group(Project);
  }
}
