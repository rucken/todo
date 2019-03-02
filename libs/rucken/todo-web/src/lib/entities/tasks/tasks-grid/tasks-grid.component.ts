import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  BaseEntityListComponent,
  ErrorsExtractor,
  IBaseEntityGridFilter,
  IBaseEntityModalOptions,
  ModalsService,
  translate
} from '@rucken/core';
import { Project, Task, TASKS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'tasks-grid',
  templateUrl: './tasks-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksGridComponent extends BaseEntityListComponent<Task> implements OnInit {
  @Input()
  autoload = false;
  @Input()
  modalItem: IBaseEntityModalOptions = {
    component: TaskModalComponent
  };
  @Input()
  title = translate('Tasks');
  @Input()
  project: Project = undefined;

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(TASKS_CONFIG_TOKEN)
    protected tasksConfig: IRestProviderOptions<Task>
  ) {
    super(dynamicRepository.fork<Task>(Task), modalsService, Task);
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.tasksConfig,
        autoload: this.autoload
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.tasksConfig,
        autoload: this.autoload
      });
    }
  }
  onChangeFilter(filter?: IBaseEntityGridFilter) {
    filter = filter ? filter : {};
    if (this.project) {
      filter.project = this.project.id;
      this.mockedItems = undefined;
    } else {
      this.mockedItems = [];
    }
    this.ngOnInit();
    super.onChangeFilter(filter);
  }
  defaultCreateCreateModal(item?: Task) {
    item = item || new Task();
    item.project = this.project;
    this.modalCreate = {
      ...this.modalCreate,
      initialState: {
        ...this.modalCreate.initialState,
        data: item
      }
    };
    return super.defaultCreateCreateModal(item);
  }
  defaultCreateUpdateModal(item?: Task) {
    item.project = this.project;
    this.modalUpdate = {
      ...this.modalUpdate,
      initialState: {
        ...this.modalUpdate.initialState,
        data: item
      }
    };
    return super.defaultCreateUpdateModal(item);
  }
}
