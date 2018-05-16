import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate, AccountService } from '@rucken/core';
import { BaseEntityListComponent, MessageModalService } from '@rucken/web';
import { Project, ProjectsConfig } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta } from 'ngx-repository';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

import { UserPermPipe } from '@rucken/web';

@Component({
  selector: 'projects-grid',
  templateUrl: './projects-grid.component.html'
})
export class ProjectsGridComponent extends BaseEntityListComponent<Project> implements OnInit {

  @Input()
  title = translate('Projects');
  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected projectsConfig: ProjectsConfig,
    protected messageModalService: MessageModalService,
    protected userPermPipe?: UserPermPipe
  ) {
    super(
      dynamicRepository.fork<Project>(Project),
      modalService,
      Project
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.projectsConfig
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.projectsConfig
      });
    }
  }
  onDblClick(item: Project) {
    if (this.userPermPipe.transform(item)) {
      this.onUpdateClick(item);
    } else {
      this.onViewClick(item);
    }
  }
  createDeleteModal(item: Project): BsModalRef {
    return this.modalService.show(ProjectModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.deleteTitle,
        message: this.strings.deleteMessage,
        yesTitle: translate('Delete'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createCreateModal(): BsModalRef {
    const item = new Project();
    return this.modalService.show(ProjectModalComponent, {
      class: 'modal-lg',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: Project): BsModalRef {
    return this.modalService.show(ProjectModalComponent, {
      class: 'modal-lg',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: Project): BsModalRef {
    return this.modalService.show(ProjectModalComponent, {
      class: 'modal-lg',
      initialState: {
        title: this.strings.viewTitle,
        noTitle: translate('Close'),
        readonly: true,
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
}
