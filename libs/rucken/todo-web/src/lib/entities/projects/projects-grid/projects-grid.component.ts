import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  BaseEntityListComponent,
  ErrorsExtractor,
  IBaseEntityModalOptions,
  ModalsService,
  translate,
  UserPermPipe
} from '@rucken/core';
import { Project, PROJECTS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'projects-grid',
  templateUrl: './projects-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsGridComponent extends BaseEntityListComponent<Project> implements OnInit {
  @Input()
  autoload = false;
  @Input()
  modalItem: IBaseEntityModalOptions = {
    component: ProjectModalComponent,
    class: 'modal-lg'
  };
  @Input()
  modalDelete = {
    class: 'modal-md'
  };
  @Input()
  title = translate('Projects');
  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(PROJECTS_CONFIG_TOKEN)
    protected projectsConfig: IRestProviderOptions<Project>,
    protected userPermPipe?: UserPermPipe
  ) {
    super(dynamicRepository.fork<Project>(Project), modalsService, Project);
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.projectsConfig,
        autoload: this.autoload
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.projectsConfig,
        autoload: this.autoload
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
}
