import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor } from '@rucken/core';
import { StatusWithProject, StatusesConfig } from '@todo/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { StatusesGridComponent } from '../statuses-grid/statuses-grid.component';
import { MessageModalService } from '@rucken/web';


@Component({
  selector: 'status-select',
  templateUrl: './status-select.component.html'
})
export class StatusSelectComponent extends StatusesGridComponent implements OnInit {

  @Input()
  searchField: FormControl = new FormControl();

  nameField = 'title';

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
        apiUrl: this.apiUrl,
        ...this.statusesConfig,
        paginationMeta: { perPage: 1000 }
      });
    }
    if (this.mockedItems) {
      this.repository.useMock({
        items: this.mockedItems,
        ...this.statusesConfig
      });
    }
  }
  checkChange(value: any, item: any) {
    return item instanceof StatusWithProject;
  }
}
