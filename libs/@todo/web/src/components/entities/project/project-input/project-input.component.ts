import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { MessageModalService } from '@rucken/web';
import { Project, ProjectsConfig } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { ProjectsGridModalComponent } from '../projects-grid-modal/projects-grid-modal.component';
import { ProjectsGridComponent } from '../projects-grid/projects-grid.component';


@Component({
  selector: 'project-input',
  templateUrl: './project-input.component.html'
})
export class ProjectInputComponent extends ProjectsGridComponent implements OnInit {

  @Output()
  select = new EventEmitter<Project>();

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
    this.mockedItems = [];
    this.repository.useMock({
      items: this.mockedItems,
      ...this.projectsConfig
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(ProjectsGridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select project'),
        yesTitle: translate('Select'),
        apiUrl: this.apiUrl
      }
    });
  }
  onSelect(item: Project) {
    this.select.emit(item);
  }
}
