import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { Change, ChangesConfig, Project } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta } from 'ngx-repository';
import { BaseEntityListComponent, MessageModalService, IEntityGridFilter } from '@rucken/web';
import { ChangeModalComponent } from '../change-modal/change-modal.component';


@Component({
  selector: 'changes-grid',
  templateUrl: './changes-grid.component.html'
})
export class ChangesGridComponent extends BaseEntityListComponent<Change> implements OnInit {

  @Input()
  title = 'Changes';
  @Input()
  project: Project;
  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected changesConfig: ChangesConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      dynamicRepository.fork<Change>(Change),
      modalService,
      Change
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.changesConfig
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.changesConfig
      });
    }
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
  createDeleteModal(item: Change): BsModalRef {
    return this.modalService.show(ChangeModalComponent, {
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
    const item = new Change();
    return this.modalService.show(ChangeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: Change): BsModalRef {
    return this.modalService.show(ChangeModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: Change): BsModalRef {
    return this.modalService.show(ChangeModalComponent, {
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
