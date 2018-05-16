import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ErrorsExtractor, translate } from '@rucken/core';
import { MessageModalService } from '@rucken/web';
import { Project, StatusWithProject, StatusesConfig } from '@todo/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DynamicRepository } from 'ngx-repository';
import { StatusesGridModalComponent } from '../statuses-grid-modal/statuses-grid-modal.component';
import { StatusesGridComponent } from '../statuses-grid/statuses-grid.component';


@Component({
  selector: 'status-input',
  templateUrl: './status-input.component.html'
})
export class StatusInputComponent extends StatusesGridComponent implements OnInit {

  @Output()
  select = new EventEmitter<StatusWithProject>();

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
    this.mockedItems = [];
    this.repository.useMock({
      items: this.mockedItems,
      ...this.statusesConfig
    });
    this.mockedItemsChange.subscribe(items =>
      this.onSelect(items[0])
    );
  }
  createAppendFromGridModal(): BsModalRef {
    return this.modalService.show(StatusesGridModalComponent, {
      class: 'modal-md',
      initialState: {
        title: translate('Select status'),
        yesTitle: translate('Select'),
        apiUrl: this.apiUrl,
        project: this.project
      }
    });
  }
  onSelect(item: StatusWithProject) {
    this.select.emit(item);
  }
}
