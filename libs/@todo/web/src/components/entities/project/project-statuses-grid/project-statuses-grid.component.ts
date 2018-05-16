import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { MessageModalService } from '@rucken/web';
import { Project, Status, StatusesConfig } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository, PaginationMeta, ProviderActionEnum } from 'ngx-repository';
import { StatusModalComponent } from '../../status/status-modal/status-modal.component';
import { StatusesGridModalComponent } from '../../status/statuses-grid-modal/statuses-grid-modal.component';
import { StatusesGridComponent } from '../../status/statuses-grid/statuses-grid.component';


@Component({
  selector: 'project-statuses-grid',
  templateUrl: './project-statuses-grid.component.html'
})
export class ProjectStatusesGridComponent extends StatusesGridComponent implements OnInit {

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
      modalService,
      errorsExtractor,
      translateService,
      dynamicRepository,
      statusesConfig,
      messageModalService
    );
  }
  ngOnInit() {
    if (!this.mockedItems) {
      this.repository.useRest({
        apiUrl: this.apiUrl + '/project/' + this.project.id,
        ...this.statusesConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.statusesConfig,
        globalEventResolver: (data: any, action: ProviderActionEnum) => {
          return action !== ProviderActionEnum.Create && action !== ProviderActionEnum.Delete;
        }
      });
    }
  }
}
