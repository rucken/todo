import { Component, Input } from '@angular/core';
import { User } from '@rucken/core';
import { BasePromptFormModalComponent } from '@rucken/web';
import { Project, Status } from '@todo/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'project-modal',
  templateUrl: './project-modal.component.html'
})
export class ProjectModalComponent extends BasePromptFormModalComponent<Project> {

  @Input()
  apiUrl?: string;

  constructor(
    protected bsModalRef: BsModalRef
  ) {
    super(bsModalRef);
    this.group(Project);
  }
  onStatusesChange(statuses: Status[]) {
    // todo: remove after ngx-dynamic-form-builder updated with correct work with arrays
    const data: Project = this.data;
    data.statuses = statuses;
    this.data = data;
  }
  onUsersChange(users: User[]) {
    // todo: remove after ngx-dynamic-form-builder updated with correct work with arrays
    const data: Project = this.data;
    data.users = users;
    this.data = data;
  }
}
