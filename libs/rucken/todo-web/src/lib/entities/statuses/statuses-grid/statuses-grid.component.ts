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
import { Project, STATUSES_CONFIG_TOKEN, StatusWithProject } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { StatusModalComponent } from '../status-modal/status-modal.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'statuses-grid',
  templateUrl: './statuses-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusesGridComponent extends BaseEntityListComponent<StatusWithProject> implements OnInit {
  @Input()
  autoload = false;
  @Input()
  modalItem: IBaseEntityModalOptions = {
    component: StatusModalComponent
  };
  @Input()
  title = translate('Statuses');
  @Input()
  project: Project = undefined;

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(STATUSES_CONFIG_TOKEN)
    protected statusesConfig: IRestProviderOptions<StatusWithProject>
  ) {
    super(dynamicRepository.fork<StatusWithProject>(StatusWithProject), modalsService, StatusWithProject);
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.statusesConfig,
        autoload: this.autoload
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.statusesConfig,
        autoload: this.autoload
      });
    }
    this.onChangeFilter();
  }
  onChangeFilter(filter?: IBaseEntityGridFilter) {
    filter = filter ? filter : {};
    if (this.project) {
      filter.project = this.project.id;
    } else {
      filter.project = -1;
    }
    super.onChangeFilter(filter);
  }
  defaultCreateCreateModal(item?: StatusWithProject) {
    item = item || new StatusWithProject();
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
  defaultCreateUpdateModal(item?: StatusWithProject) {
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
