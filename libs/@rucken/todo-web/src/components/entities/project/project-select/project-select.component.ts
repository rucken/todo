import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor } from '@rucken/core';
import { MessageModalService } from '@rucken/web';
import { Project, ProjectsConfig } from '@rucken/todo-core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';


@Component({
  selector: 'project-select',
  templateUrl: './project-select.component.html'
})
export class ProjectSelectComponent extends ProjectsGridComponent implements OnInit {

  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'title';

  constructor(
    public modalService: BsModalService,
    protected errorsExtractor: ErrorsExtractor,
    protected translateService: TranslateService,
    protected dynamicRepository: DynamicRepository,
    protected projectsConfig: ProjectsConfig,
    protected messageModalService: MessageModalService
  ) {
    super(
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      projectsConfig,
      messageModalService
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl,
        ...this.projectsConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.projectsConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof Project;
  }
}
