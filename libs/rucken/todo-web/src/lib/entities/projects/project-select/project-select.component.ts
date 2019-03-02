import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, ModalsService } from '@rucken/core';
import { Project, PROJECTS_CONFIG_TOKEN } from '@rucken/todo-core';
import { DynamicRepository, IRestProviderOptions } from 'ngx-repository';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';
import { BindIoInner } from 'ngx-bind-io';

@BindIoInner()
@Component({
  selector: 'project-select',
  templateUrl: './project-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectSelectComponent extends ProjectsGridComponent implements OnInit {
  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'title';

  constructor(
    modalsService: ModalsService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    @Inject(PROJECTS_CONFIG_TOKEN)
    protected projectsConfig: IRestProviderOptions<Project>
  ) {
    super(modalsService, errorsExtractor, translateService, dynamicRepository, projectsConfig);
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.useRest({
        apiUrl: this.apiUrl,
        ...this.projectsConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.useMock({
        items: this.mockedItems,
        ...this.projectsConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof Project;
  }
}
