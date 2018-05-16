import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { StatusWithProject, StatusesConfig, Project } from '@rucken/todo-core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta } from 'ngx-repository';
import { BaseEntityListComponent, MessageModalService, IEntityGridFilter } from '@rucken/web';
import { StatusModalComponent } from '../status-modal/status-modal.component';


@Component({
  selector: 'statuses-grid',
  templateUrl: './statuses-grid.component.html'
})
export class StatusesGridComponent extends BaseEntityListComponent<StatusWithProject> implements OnInit {

  @Input()
  project: Project;
  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected statusesConfig: StatusesConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      dynamicRepository.fork<StatusWithProject>(StatusWithProject),
      modalService,
      StatusWithProject
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.statusesConfig
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.statusesConfig
      });
    }
    this.onChangeFilter();
  }
  onChangeFilter(filter?: IEntityGridFilter) {
    filter = filter ? filter : {};
    if (this.project) {
      filter.project = this.project.id;
    } else {
      filter.project = -1;
    }
    super.onChangeFilter(filter);
  }
  createDeleteModal(item: StatusWithProject): BsModalRef {
    return this.modalService.show(StatusModalComponent, {
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
    const item = new StatusWithProject();
    item.project = this.project;
    return this.modalService.show(StatusModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: StatusWithProject): BsModalRef {
    item.project = this.project;
    return this.modalService.show(StatusModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: StatusWithProject): BsModalRef {
    return this.modalService.show(StatusModalComponent, {
      class: 'modal-md',
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
