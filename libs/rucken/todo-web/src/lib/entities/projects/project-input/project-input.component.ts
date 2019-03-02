import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, ModalsService, translate } from '@rucken/core';
import { Project, PROJECTS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { ProjectsGridModalComponent } from '../projects-grid-modal/projects-grid-modal.component';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'project-input',
  templateUrl: './project-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectInputComponent extends ProjectsGridComponent implements OnInit {
  @Output()
  select = new EventEmitter<Project>();
  @Input()
  modalAppendFromGrid = {
    component: ProjectsGridModalComponent,
    initialState: {
      title: translate('Select project'),
      yesTitle: translate('Select')
    }
  };
  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(PROJECTS_CONFIG_TOKEN) protected projectsConfig: IRestProviderOptions<Project>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, projectsConfig);
  }
  ngOnInit() {
    this.mockedItems = [];
    this.useMock({
      items: this.mockedItems,
      ...this.projectsConfig
    });
    this.mockedItemsChange.subscribe(items => this.onSelect(items[0]));
  }
  onSelect(item: Project) {
    this.select.emit(item);
  }
}
