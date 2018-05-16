import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { BaseEntityListComponent, MessageModalService, IEntityGridFilter } from '@rucken/web';
import { Project, Task, TasksConfig } from '@rucken/todo-core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta } from 'ngx-repository';
import { TaskModalComponent } from '../task-modal/task-modal.component';


@Component({
  selector: 'tasks-grid',
  templateUrl: './tasks-grid.component.html'
})
export class TasksGridComponent extends BaseEntityListComponent<Task> implements OnInit {

  @Input()
  title = translate('Tasks');
  @Input()
  project: Project;
  public paginationMeta: PaginationMeta;
  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected tasksConfig: TasksConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      dynamicRepository.fork<Task>(Task),
      modalService,
      Task
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.tasksConfig
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.tasksConfig
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
  createDeleteModal(item: Task): BsModalRef {
    return this.modalService.show(TaskModalComponent, {
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
    const item = new Task();
    item.project = this.project;
    return this.modalService.show(TaskModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.createTitle,
        yesTitle: translate('Create'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createUpdateModal(item?: Task): BsModalRef {
    item.project = this.project;
    return this.modalService.show(TaskModalComponent, {
      class: 'modal-md',
      initialState: {
        title: this.strings.updateTitle,
        yesTitle: translate('Save'),
        data: item,
        apiUrl: this.apiUrl
      }
    });
  }
  createViewModal(item?: Task): BsModalRef {
    return this.modalService.show(TaskModalComponent, {
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
